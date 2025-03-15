import React, { useState, useEffect, useRef } from 'react';
import Flag from 'react-world-flags';

export default function MainContent() {
    const [selectedLanguage, setSelectedLanguage] = useState("French");
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const textareaRef = useRef(null);

    const languages = {
        1: { name: "French", code: "FR" }, 
        2: { name: "Spanish", code: "ES" },
        3: { name: "Japanese", code: "JP" },
    };

    const handleRadioChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    const fetchTranslation = async () => {
        setLoading(true);
        setError(null);  // Reset error state
        setResponse(null); // Reset previous response
    
        try {
            const response = await fetch("https://fastapi-app-501427434491.us-central1.run.app", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    text: text, 
                    target_language: selectedLanguage // ✅ Send full language name
                })
            });
    
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
            const data = await response.json();
            setResponse(data.translated_text);  // ✅ Set translation response
        } catch (error) {
            console.error("Error fetching translation:", error);
            setError("❌ Translation failed. Try again!"); // 🔴 Set error message
        }
        setLoading(false);
    };
    
    

    const handleTranslateClick = () => {
        if (text.trim() === "") {
            setError("⚠️ Please enter some text to translate."); // ⚠️ Warn user
            setResponse(null);
        } else {
            fetchTranslation();
        }
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [text]);

    const handleInputChange = (event) => {
        setText(event.target.value);
        setError(null); // Reset error when user types
    };

    return (
        <main>
            <h2 className="subheading">Text to translate 👇</h2>
            <textarea
                id="input" 
                placeholder="Enter text to translate here"
                rows={4}
                ref={textareaRef}
                value={text}
                onChange={handleInputChange}
            />

            {error && ( // 🔴 Show error in red
                <div className="error-message">
                    {error}
                </div>
            )}

            {response && !error && ( // ✅ Show translation only if no error
                <div className="translation">
                    <h2 className="subheading">Your translation 👇</h2>
                    <div className="translation-text">
                        {response}
                    </div>
                </div>
            )}

            <h2 className="subheading">Select language 👇</h2>
            <div className='languages'>
                {Object.entries(languages).map(([id, language]) => (
                    <label key={id}>
                        <input
                            type="radio"
                            name="language"
                            value={language.name}
                            checked={selectedLanguage === language.name}
                            onChange={handleRadioChange}
                        />
                        {language.name} <Flag code={language.code} className='language-icon' />
                    </label>
                ))}
            </div>

            <button 
                className="translate-btn"
                onClick={handleTranslateClick} 
                disabled={loading}
            >
                {loading ? (
                    <div className="spinner"></div>
                ) : (
                    "Translate"
                )}
            </button>

            {loading && <div className="overlay"></div>}
        </main>
    );
}
