import { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const [errors, setErrors] = useState({});

  // ✅ Validation Function
  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      const items = formData.ingredients.split(',').map((i) => i.trim());
      if (items.length < 2) {
        newErrors.ingredients = 'Please include at least two ingredients';
      }
    }

    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
    } else if (formData.steps.length < 20) {
      newErrors.steps = 'Please provide more detailed preparation steps';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    alert('Recipe submitted successfully! ');
    console.log('Submitted Recipe:', formData);

    // Reset form
    setFormData({ title: '', ingredients: '', steps: '' });
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Add a New Recipe
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Recipe Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Recipe Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full border p-2 rounded focus:outline-none focus:ring-2 ${
                errors.title ? 'border-red-500 ring-red-200' : 'focus:ring-blue-200'
              }`}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Ingredients (comma-separated)
            </label>
            <textarea
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              className={`w-full border p-2 rounded focus:outline-none focus:ring-2 ${
                errors.ingredients
                  ? 'border-red-500 ring-red-200'
                  : 'focus:ring-blue-200'
              }`}
              rows="3"
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* Preparation Steps */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Preparation Steps
            </label>
            <textarea
              name="steps"
              value={formData.steps}
              onChange={handleChange}
              className={`w-full border p-2 rounded focus:outline-none focus:ring-2 ${
                errors.steps ? 'border-red-500 ring-red-200' : 'focus:ring-blue-200'
              }`}
              rows="4"
            />
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition"
            >
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
