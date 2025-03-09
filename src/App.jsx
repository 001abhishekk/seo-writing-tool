import React, { useState } from 'react';

function App() {
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [urlSlug, setUrlSlug] = useState("");

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">SEO Writing Tool</h1>

      <div className="mt-4">
        <label className="block">Meta Title ({metaTitle.length}/60)</label>
        <input 
          type="text" 
          value={metaTitle} 
          onChange={(e) => setMetaTitle(e.target.value)}
          className="w-full border p-2"
        />
      </div>

      <div className="mt-4">
        <label className="block">Meta Description ({metaDescription.length}/175)</label>
        <textarea 
          value={metaDescription} 
          onChange={(e) => setMetaDescription(e.target.value)}
          className="w-full border p-2"
        ></textarea>
      </div>

      <div className="mt-4">
        <label className="block">URL Slug ({urlSlug.length}/60)</label>
        <input 
          type="text" 
          value={urlSlug} 
          onChange={(e) => setUrlSlug(e.target.value)}
          className="w-full border p-2"
        />
      </div>
    </div>
  );
}

export default App;
