import React, { useState, useEffect } from "react";

interface Template {
  name: string;
  code: string;
  emoji: string;
}

const templates: Template[] = [
  {
    name: "Hello World",
    emoji: "👋",
    code: `<!-- This is your first web page! -->
<h1 class="text-slate-700 font-poppins text-center text-4xl font-light">
  Hello World!
</h1>
<p class="text-slate-500 font-nunito text-center text-lg mt-6">
  Welcome to coding! Let's create something beautiful together.
</p>`,
  },
  {
    name: "Calm Circles",
    emoji: "○",
    code: `<!-- Three circles with gentle movement -->
<div class="flex justify-center items-center h-48 gap-8">
  <div class="circle sage-circle"></div>
  <div class="circle sky-circle"></div>  
  <div class="circle stone-circle"></div>
</div>

<!-- Subtle, natural styling -->
<style>
  .circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    animation: gentle-float 3s ease-in-out infinite;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }
  
  .sage-circle {
    background: linear-gradient(135deg, #a8b5a0, #c4d1bd);
  }
  
  .sky-circle {
    background: linear-gradient(135deg, #b8c5d1, #d4e0ed);
    animation-delay: 1s;
  }
  
  .stone-circle {
    background: linear-gradient(135deg, #c1b5a3, #ddd0be);
    animation-delay: 2s;
  }
  
  @keyframes gentle-float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
</style>`,
  },
  {
    name: "Nordic Button",
    emoji: "◆",
    code: `<!-- A clean, minimalist button -->
<button class="bg-slate-600 hover:bg-slate-700 text-white px-12 py-4 rounded-lg font-poppins font-medium cursor-pointer block mx-auto my-8 transition-all duration-200 shadow-lg hover:shadow-xl" onclick="changeTheme()">
  Change Theme
</button>

<p id="message" class="text-center font-nunito text-slate-600 text-lg">
  Click to discover new colors
</p>

<!-- Simple, elegant interaction -->
<script>
  function changeTheme() {
    const themes = [
      { bg: 'bg-emerald-600 hover:bg-emerald-700', name: 'Forest Theme' },
      { bg: 'bg-blue-600 hover:bg-blue-700', name: 'Ocean Theme' },
      { bg: 'bg-amber-600 hover:bg-amber-700', name: 'Autumn Theme' },
      { bg: 'bg-slate-600 hover:bg-slate-700', name: 'Stone Theme' }
    ];
    
    const button = document.querySelector('button');
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    
    button.className = button.className.replace(/bg-\w+-\d+\s+hover:bg-\w+-\d+/g, randomTheme.bg);
    
    document.getElementById('message').textContent = randomTheme.name + ' activated!';
  }
</script>`,
  },
];

function App() {
  const [code, setCode] = useState<string>(templates[0].code);
  const [selectedTemplate, setSelectedTemplate] = useState<number>(0);

  useEffect(() => {
    setCode(templates[selectedTemplate].code);
  }, [selectedTemplate]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="relative bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 md:py-12 text-center">
          <div className="inline-block">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-700 mb-3 md:mb-4 font-poppins">
              Code Studio
            </h1>
          </div>

          {/* Template Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4 md:mb-8">
            {templates.map((template, index) => (
              <button
                key={index}
                onClick={() => setSelectedTemplate(index)}
                className={`template-button px-3 py-2 md:px-6 md:py-3 rounded-lg font-nunito font-medium transition-all duration-200 text-sm md:text-base ${
                  selectedTemplate === index
                    ? "bg-slate-600 text-white shadow-md"
                    : "bg-white text-slate-600 shadow-sm hover:shadow-md border border-slate-200"
                }`}
              >
                {template.emoji} {template.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-2 md:px-4 py-4 md:py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Code Editor Section */}
          <div className="border-b border-slate-200 p-4 md:p-8">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-lg md:text-xl font-poppins font-medium text-slate-700">
                Your Code
              </h2>
            </div>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-48 md:h-64 lg:h-80 p-3 md:p-6 rounded-xl bg-slate-50 border border-slate-200 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all font-roboto"
              placeholder="Write your HTML and CSS here... Clean and simple."
              spellCheck={false}
              style={{ fontSize: "16px" }}
            />
          </div>

          {/* Preview Section */}
          <div className="p-4 md:p-8">
            <div className="flex items-center space-x-2 mb-4 md:mb-6">
              <h2 className="text-lg md:text-xl font-poppins font-medium text-slate-700">
                Live Preview
              </h2>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200 min-h-48 md:min-h-64 p-3 md:p-6 relative overflow-auto">
              <div
                dangerouslySetInnerHTML={{ __html: code }}
                className="preview-content"
              />

              {!code.trim() && (
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <div className="text-center px-4">
                    <p className="font-nunito text-sm md:text-base">
                      Your creation will appear here
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
