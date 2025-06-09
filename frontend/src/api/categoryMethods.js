const url = '/api/category';

async function getAllCategories() {
  try {
    const response = await fetch(`${url}/all`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function getCategoryById(categoryId) {
  try {
    const response = await fetch(`${url}/${categoryId}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function getCategorybyName(categoryName) {
  try {
    const response = await fetch(`${url}/name/${categoryName}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function saveCategory(category) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function updateCategory(category) {
  try {
    const response = await fetch(`${url}/${category.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function deleteCategory(categoryId) {
  try {
    const response = await fetch(`${url}/${categoryId}`, {
      method: 'DELETE',
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export { getAllCategories, getCategoryById, getCategorybyName, saveCategory, updateCategory, deleteCategory };