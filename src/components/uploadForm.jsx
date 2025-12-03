import React, { useState } from 'react';
import { uploadModel } from '../api/modelApi';


export default function UploadForm({ onUploaded }) {
const [file, setFile] = useState(null);
const [loading, setLoading] = useState(false);


const handleSubmit = async (e) => {
e.preventDefault();
if (!file) return alert('Choose a GLB file');
setLoading(true);
try {
const res = await uploadModel(file);
onUploaded(res.data.model);
setFile(null);
alert('Uploaded');
} catch (err) {
console.error(err);
alert('Upload failed');
} finally { setLoading(false); }
};


return (
<form onSubmit={handleSubmit} className="space-y-2">
<input accept=".glb,.gltf" type="file" onChange={(e) => setFile(e.target.files[0])} />
<button className="px-4 py-2 bg-blue-600 text-white rounded" disabled={loading}>
{loading ? 'Uploading...' : 'Upload'}
</button>
</form>
);
}