import { useState, useEffect } from "react";

interface Template {
  name: string;
  code: string;
  emoji: string;
}

const templates: Template[] = [
  {
    name: "Hello World",
    emoji: "�",
    code: `<!-- This is your first web page! -->
<h1 class="text-purple-600 font-fredoka text-center text-4xl font-bold">
  Hello World!
</h1>
<p class="text-pink-500 font-pacifico text-center text-xl mt-4">
  Welcome to coding! 🎉
</p>`,
  },
  {
    name: "Dancing Circles",
    emoji: "✨",
    code: `<!-- Three circles that bounce up and down! -->
<div class="flex justify-center items-center h-48 gap-5">
  <div class="circle pink-circle"></div>
  <div class="circle blue-circle"></div>  
  <div class="circle purple-circle"></div>
</div>

<!-- The styles make the magic happen -->
<style>
  /* Basic circle shape */
  .circle {
    width: 60px;
    height: 60px;
    border-radius: 50%; /* This makes it round! */
    animation: bounce 1s infinite; /* Makes it bounce forever */
  }
  
  /* Different colors for each circle */
  .pink-circle {
    background: linear-gradient(45deg, #ff9a9e, #fecfef);
  }
  
  .blue-circle {
    background: linear-gradient(45deg, #a8edea, #fed6e3);
    animation-delay: 0.2s; /* Starts bouncing slightly later */
  }
  
  .purple-circle {
    background: linear-gradient(45deg, #fad0c4, #ffd1ff);
    animation-delay: 0.4s; /* Starts bouncing even later */
  }
  
  /* The bouncing animation */
  @keyframes bounce {
    0%, 100% { transform: translateY(0); } /* Start and end position */
    50% { transform: translateY(-30px); } /* Jump up! */
  }
</style>`,
  },
  {
    name: "Fun Button",
    emoji: "🔮",
    code: `<!-- An interactive button that changes! -->
<button class="bg-gradient-to-r from-orange-400 to-red-500 text-white px-8 py-4 rounded-full font-bangers text-lg cursor-pointer block mx-auto my-5 hover:scale-105 transition-transform" onclick="changeColor()">
  ✨ Click Me! ✨
</button>

<p id="message" class="text-center font-kalam text-lg text-gray-600">
  Try clicking the button above!
</p>

<!-- JavaScript makes it interactive! -->
<script>
  function changeColor() {
    const colors = [
      'from-pink-400 to-purple-500',
      'from-blue-400 to-cyan-500', 
      'from-green-400 to-lime-500',
      'from-orange-400 to-yellow-500'
    ];
    const button = document.querySelector('button');
    const randomGradient = colors[Math.floor(Math.random() * colors.length)];
    
    // Remove old gradient classes and add new ones
    button.className = 'bg-gradient-to-r text-white px-8 py-4 rounded-full font-bangers text-lg cursor-pointer block mx-auto my-5 hover:scale-105 transition-transform ' + randomGradient;
    
    document.getElementById('message').textContent = 'Wow! The colors changed! 🌈';
  }
</script>`,
  },
];

function App() {
  const [code, setCode] = useState(templates[0].code);
  const [selectedTemplate, setSelectedTemplate] = useState(0);

  useEffect(() => {
    setCode(templates[selectedTemplate].code);
  }, [selectedTemplate]);

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 px-4 py-8 text-center">
          <div className="float-animation inline-block">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg font-fredoka">
              Code Playground
            </h1>
          </div>

          {/* Template Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {templates.map((template, index) => (
              <button
                key={index}
                onClick={() => setSelectedTemplate(index)}
                className={`template-button px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  selectedTemplate === index
                    ? "bg-white text-purple-600 shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {template.emoji} {template.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Code Editor Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-white text-2xl">💻</span>
                <h2 className="text-xl font-bold text-white font-bungee">
                  Your Code
                </h2>
              </div>
            </div>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-64 md:h-80 p-4 rounded-xl code-editor text-sm resize-none focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all custom-scrollbar touch-manipulation font-roboto"
              placeholder="Write your HTML and CSS here... Don't worry, you can't break anything! ✨"
              spellCheck={false}
              style={{ fontSize: "16px" }} // Prevents zoom on iOS
            />
          </div>

          {/* Preview Section */}
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <h2 className="text-xl font-bold text-gray-800 font-bungee">
                Live Preview
              </h2>
            </div>

            <div className="bg-gray-50 rounded-xl border-2 border-dashed border-purple-200 min-h-64 p-6 relative overflow-auto custom-scrollbar">
              <div
                dangerouslySetInnerHTML={{ __html: code }}
                className="preview-content"
              />

              {!code.trim() && (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <p className="font-pacifico">
                      Your awesome creation will appear here! ✨
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
