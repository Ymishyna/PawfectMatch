export const getSavedPetIds = () => {
  const savedPetIds = localStorage.getItem('saved_pets')
    ? JSON.parse(localStorage.getItem('saved_pets'))
    : [];

  return savedPetIds;
};

export const savepetIds = (petIdArr) => {
  if (petIdArr.length) {
    localStorage.setItem('saved_pets', JSON.stringify(petIdArr));
  } else {
    localStorage.removeItem('saved_pets');
  }
};

export const removepetId = (petId) => {
  const savedPetIds = localStorage.getItem('saved_pets')
    ? JSON.parse(localStorage.getItem('saved_pets'))
    : null;

  if (!savedPetIds) {
    return false;
  }

  const updatedsavedPetIds = savedPetIds?.filter((savedPetId) => savedPetId !== petId);
  localStorage.setItem('saved_pets', JSON.stringify(updatedsavedPetIds));

  return true;
};
