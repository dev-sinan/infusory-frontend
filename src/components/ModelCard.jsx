import { useNavigate } from "react-router-dom";
import { deleteModel } from "../api/modelApi";

export default function ModelCard({ model }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col">
      <h3 className="font-bold text-lg">{model.name}</h3>
      <p className="text-gray-500 text-sm">
        {new Date(model.createdAt).toLocaleString()}
      </p>

      <div className="mt-5 flex gap-3">
        <button
          className="flex-1 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          onClick={() => navigate(`/viewer/${model._id}`)}
        >
          Preview
        </button>

        <button
          className="flex-1 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={async () => {
            await deleteModel(model._id);
            window.location.reload();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
