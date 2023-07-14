// import { ref } from 'vue';

export function useAddProduct(newProduct, fetchproductData, showAddForm) {
  const addProduct = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/sclproducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct.value),
      });

      if (response.ok) {
        fetchproductData();
        showAddForm.value = false;
        newProduct.value = {
          sclproductimg: '',
          prodname: '',
          prodcode: '',
          brand: '',
          soldby: '',
          dprice: '',
          oprice: '',
          discount: '',
          size: '',
          quantity: '',
        };
      } else {
        console.error('Error adding product:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return addProduct;
}

export function useRemoveProduct(sclproducts) {
  const removeProduct = async (scl) => {
    const index = sclproducts.value.findIndex((item) => item.id === scl.id);
    if (index !== -1) {
      sclproducts.value.splice(index, 1);
      try {
        const response = await fetch(`http://localhost:3000/sclproducts/${scl.id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          console.log('Product removed successfully');
        } else {
          throw new Error('Failed to remove product');
        }
      } catch (error) {
        console.error('Error removing product:', error);
      }
    }
  };

  return removeProduct;
}
