"use client";

import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../subframe/components/Button";
import { Tabs } from "../subframe/components/Tabs";
import { TextField } from "../subframe/components/TextField";
import { IconButton } from "../subframe/components/IconButton";
import { Table } from "../subframe/components/Table";
import { Badge } from "../subframe/components/Badge";
import { DropdownMenu } from "../subframe/components/DropdownMenu";
import * as SubframeCore from "@subframe/core";
import { Checkbox } from "../subframe/components/Checkbox";
import { CheckboxGroup } from "../subframe/components/CheckboxGroup";
import { Progress } from "../subframe/components/Progress";


function ItemPage({onLogout}) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpenf, setIsOpenf] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const openModal1 = () => setIsOpen1(true);
  const closeModal1 = () => setIsOpen1(false);
  const openModalf = () => setIsOpenf(true);
  const closeModalf = () => setIsOpenf(false);
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const getTagIcon = (tagId) => {
    const tagIcons = {
      '0': 'FeatherDollarSign', // Assuming these are the icon names you have
      '1': 'FeatherSettings',
      '2': 'FeatherShoppingCart'
    };
    return tagIcons[tagId] || null;
  };
  const fetchItems = async (category) => {
    try {
      let url = 'http://localhost:8000/api/items/';
      if (category) {
        url += `?category=${category}`;
      }
      const response = await fetch(url);
      console.log(response)
      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }
      const data = await response.json();
      console.log(data)
      setFilteredItems(data); 
      return data; // Return the data instead of setting it directly
    } catch (error) {
      console.error('Error fetching items:', error);
      throw error; // Rethrow the error so that it can be caught by the caller
    }
  };
  
  useEffect(() => {
    fetchItems().then(data => setItems(data)).catch(error => console.error('Error in useEffect:', error));
  }, []);
  
  const handleCategorySelect = async (category) => {
    setSelectedCategory(category); // Update the selected category in state
    try {
      const data = await fetchItems(category);
      // console.log(data);
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
  useEffect(() => {
    if (searchTerm) {
      const filtered = items.filter(item =>
        item.sku.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(filtered)
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items); // If no search term, show all items
    }
  }, [searchTerm, items]); // Re-run when items or searchTerm changes

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  return (
    <div className="container max-w-none flex h-full w-full flex-col items-start gap-12 bg-default-background pt-12 pb-12">
      <div className="flex w-full flex-col items-start gap-6">
        <div className="flex w-full items-center gap-2">
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1">
            <span className="w-full text-heading-2 font-heading-2 text-default-font">
              Item Dashboard
            </span>
            <span className="text-body font-body text-subtext-color">
              Keep a track of your inventory here
            </span>
          </div>
         
          <Button variant="neutral-primary" onClick={onLogout} icon={null} iconRight={null}>
            Logout
          </Button>
        </div>
        <Tabs>
          <div className="flex items-center gap-2">
            <Tabs.Item onClick={() => navigate("/itemPage")} active={true}>Items</Tabs.Item>
            <Tabs.Item onClick={() => navigate("/buildPage")} >Build</Tabs.Item>
          </div>
        </Tabs>
      </div>
      <div className="flex w-full items-center gap-6">
        <Button size="medium" icon="FeatherPlus" onClick={openModal}>Add Item</Button >
        {isOpen && <AddItem closeModal={closeModal} fetchItems={fetchItems}/>}
        <Button size="medium" icon="FeatherPlus" onClick={openModal1}>Add Category</Button> 
        {isOpen1 && <AddCategory closeModal1={closeModal1} />}
        <TextField
          className="h-auto w-full grow shrink-0 basis-0"
          label=""
          helpText=""
          icon="FeatherSearch"
        >
          <TextField.Input placeholder="Search"
           value={searchTerm}
           onChange={handleSearchChange}
           />
        </TextField>
        <IconButton onClick={openModalf} size="medium" icon="FeatherFilter" />
        {isOpenf && <FilterStocks closeModal={closeModalf} handleCategorySelect={handleCategorySelect} />}
              <SubframeCore.DropdownMenu.Root>
                <SubframeCore.DropdownMenu.Trigger asChild={true}>
                  <IconButton size="medium" icon="FeatherSortAsc" />
                </SubframeCore.DropdownMenu.Trigger>
                <SubframeCore.DropdownMenu.Portal>
                  <SubframeCore.DropdownMenu.Content
                    side="bottom"
                    align="end"
                    sideOffset={8}
                    asChild={true}
                  >
                    <DropdownMenu>
                      <DropdownMenu.DropdownItem>
                        In Stock
                      </DropdownMenu.DropdownItem>
                      <DropdownMenu.DropdownItem >
                        Name 
                      </DropdownMenu.DropdownItem>
                     
                    </DropdownMenu>
                  </SubframeCore.DropdownMenu.Content>
                </SubframeCore.DropdownMenu.Portal>
              </SubframeCore.DropdownMenu.Root>
            </div>
     
      <Table
        header={
          <Table.HeaderRow>
            <Table.HeaderCell>SKU</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Tags</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>In Stock</Table.HeaderCell>
            <Table.HeaderCell>Available Stock</Table.HeaderCell>
            <Table.HeaderCell>Inventory</Table.HeaderCell>
          </Table.HeaderRow>
        }
      >
        {filteredItems.map(item => (
        <Table.Row key={item.sku}>
          <Table.Cell>
            <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
              {item.sku}
            </span>
          </Table.Cell>
          <Table.Cell>
            <span className="whitespace-nowrap text-body font-body text-neutral-500">
              {item.name}
            </span>
          </Table.Cell>
          <Table.Cell>
            {item.tags.map(tag => (
              <SubframeCore.Icon
                key={tag}
                className="text-body font-body text-default-font"
                name={getTagIcon(tag)}
              />
            ))}
          </Table.Cell>
          <Table.Cell>
            <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
              {item.category_details.category} {/* Assuming category has a name attribute */}
            </span>
          </Table.Cell>
          <Table.Cell>
            <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
              {item.inStock}
            </span>
          </Table.Cell>
          <Table.Cell>
            <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
              {item.availableStock}
            </span>
          </Table.Cell>
          <Table.Cell>
            <Progress className="h-auto w-full min-w-[30px] grow shrink-0 basis-0"
            value={Math.round((item.availableStock / item.inStock) * 100)} />
            



          </Table.Cell>
          <Table.Cell>
            <div className="flex w-full grow shrink-0 basis-0 items-center justify-end">
              <SubframeCore.DropdownMenu.Root>
                <SubframeCore.DropdownMenu.Trigger asChild={true}>
                  <IconButton size="medium" icon="FeatherMoreHorizontal" />
                </SubframeCore.DropdownMenu.Trigger>
                <SubframeCore.DropdownMenu.Portal>
                  <SubframeCore.DropdownMenu.Content
                    side="bottom"
                    align="end"
                    sideOffset={8}
                    asChild={true}
                  >
                    <DropdownMenu>
                      <DropdownMenu.DropdownItem icon="FeatherEdit2">
                        Edit
                      </DropdownMenu.DropdownItem>
                      <DropdownMenu.DropdownItem icon="FeatherTrash">
                        Delete
                      </DropdownMenu.DropdownItem>
                    </DropdownMenu>
                  </SubframeCore.DropdownMenu.Content>
                </SubframeCore.DropdownMenu.Portal>
              </SubframeCore.DropdownMenu.Root>
            </div>
          </Table.Cell>
        </Table.Row>
      ))}

       
        
      </Table>
    </div>
  );
}

function AddItem({closeModal, fetchItems}) {
  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [inStock, setInStock] = useState('');
  const [availableStock, setAvailableStock] = useState('');
  // const [tags, setTags] = useState('');
  // const [tags, setTags] = useState({
  //   Dollar: false,
  //   Settings: false,
  //   Shopping: false
  // });
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);  // State to store category data

  // Fetch categories from the backend on component mount
  useEffect(() => {
    fetch('http://localhost:8000/api/categories/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCategories(data);  // Store the categories in state
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);  
  const handleSubmit = (event) => {
    event.preventDefault();

    // Construct the form data
    const formData = {
      sku,
      name,
      tags, // Only include tags that are checked tags: Object.keys(tags).filter(key => tags[key]),
      category,
      inStock,
      availableStock
      
    };
    console.log(formData);
    // Send data to the server
    fetch('http://localhost:8000/api/items/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        response.json().then(data => console.log(data));
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      closeModal(); // Close the modal after successful API response
      fetchItems();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  const handleTagChange = (value) => {
    console.log(value);
    //const value = e.target.value;
    setTags(prevTags => {
      if (prevTags.includes(value)) {
        return prevTags.filter(tag => tag !== value);
      } else {
        return [...prevTags, value];
      }
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center overflow-y-auto">
  <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl transition duration-150 ease-in-out transform scale-95 hover:scale-100 mx-auto" style={{ width: '800px', maxWidth: '90%' }}>
    <h2 className="text-xl font-semibold mb-6 text-gray-800">Add New Item</h2>
    <div className="mb-5">
      <label className="block text-gray-800 text-sm font-medium mb-2">
        SKU
      </label>
      <input type="text" name="sku" value={sku} onChange={e => setSku(e.target.value)} className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
    </div>
    <div className="mb-5">
      <label className="block text-gray-800 text-sm font-medium mb-2">
        Name
      </label>
      <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
    </div>
    
    <div className="mb-5">
    <CheckboxGroup label="tags" name="tags"  helpText="" error={false} horizontal={false}>
    <Checkbox label="Dollar" value="1" onCheckedChange={() => handleTagChange(0)} />
    <Checkbox label="Settings" value="2" onCheckedChange={() => handleTagChange(1)} />
    <Checkbox label="Shopping" value="3" onCheckedChange={() => handleTagChange(2)} />
          </CheckboxGroup>
          </div>

    {/* <div className="mb-5">
          <label className="block text-gray-800 text-sm font-medium mb-2">
            Tags
          </label>
          <input type="text" name="tags" value={tags} onChange={e => setTags(e.target.value)} className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
        </div> */}

      <div className="mb-6">
      <label className="block text-gray-800 text-sm font-medium mb-2">
        Category
      </label>
      <select name="category" value={category} onChange={e => setCategory(e.target.value)} className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required>
      <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.category}</option>
            ))}
      </select>

    </div>
    <div className="mb-5">
      <label className="block text-gray-800 text-sm font-medium mb-2">
        In Stock
      </label>
      <input type="number" name="inStock" value={inStock} onChange={ e => setInStock(e.target.value)} className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
    </div>
    <div className="mb-5">
      <label className="block text-gray-800 text-sm font-medium mb-2">
        Available Stock
      </label>
      <input type="number" name="availableStock" value={availableStock} onChange={e => setAvailableStock(e.target.value)} className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
    </div>
    <div className="flex items-center justify-end space-x-4">
    <button type="button" onClick={closeModal} className="px-4 py-2 bg-red-300 hover:bg-red-400 text-white font-semibold rounded-lg shadow focus:outline-none focus:shadow-outline" style={{ minWidth: '100px' }}>
      Cancel
    </button>
    <button type="submit" className="px-4 py-2 bg-blue-300 hover:bg-blue-400 text-white font-semibold rounded-lg shadow focus:outline-none focus:shadow-outline" style={{ minWidth: '100px' }}>
      Add
    </button>
  </div>

  </form>
</div>
  );
}

function AddCategory({closeModal1}) {
  const [categoryName, setCategoryName] = useState('');
  const handleSubmit1 = (event) => {
  //   event.preventDefault();
  //   // Send data to Lambda
  //   closeModal1(); // Close the modal after form submission
  // };
  event.preventDefault();
    fetch('http://localhost:8000/api/categories/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ category: categoryName })
      
    })
    
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      closeModal1(); // Close the modal after successful API response
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center overflow-y-auto">
  <form onSubmit={handleSubmit1} className="bg-white p-8 rounded-lg shadow-xl transition duration-150 ease-in-out transform scale-95 hover:scale-100 mx-auto" style={{ width: '800px', maxWidth: '90%' }}>
    <h2 className="text-xl font-semibold mb-6 text-gray-800">Add New Category</h2>
    <div className="mb-5">
      <label className="block text-gray-800 text-sm font-medium mb-2">
        Category
      </label>
      <input type="text" name="categoryName" value={categoryName}
       onChange={e => setCategoryName(e.target.value)} 
       className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
    </div>
   
  
    <div className="flex items-center justify-end space-x-4">
    <button type="button" onClick={closeModal1} className="px-4 py-2 bg-red-300 hover:bg-red-400 text-white font-semibold rounded-lg shadow focus:outline-none focus:shadow-outline" style={{ minWidth: '100px' }}>
      Cancel
    </button>
    <button type="submit" className="px-4 py-2 bg-blue-300 hover:bg-blue-400 text-white font-semibold rounded-lg shadow focus:outline-none focus:shadow-outline" style={{ minWidth: '100px' }}>
      Add
    </button>
  </div>

  </form>
</div>
  );
}



function FilterStocks({ closeModal,handleCategorySelect }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const selectedCategory = formData.get('category');
    handleCategorySelect(selectedCategory); // Pass the selected category to the parent component
    closeModal(); // Close the modal after form submission
  };
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/api/categories/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCategories(data);  // Store the categories in state
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []); 
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center overflow-y-auto">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl transition duration-150 ease-in-out transform scale-95 hover:scale-100 mx-auto" style={{ width: '800px', maxWidth: '90%' }}>
        <h2 className="text-xl font-semibold mb-6 text-gray-800">Filter Stock Data</h2>
        
        
       <div className="mb-6">
      <label className="block text-gray-800 text-sm font-medium mb-2">
        Category
      </label>
      <select name="category" className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required>
      <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.category}</option>
            ))}
      </select>
    </div>
        
  
        <div className="flex items-center justify-end space-x-4">
          <button type="button" onClick={closeModal} className="px-4 py-2 bg-red-300 hover:bg-red-400 text-white font-semibold rounded-lg shadow focus:outline-none focus:shadow-outline" style={{ minWidth: '100px' }}>
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-300 hover:bg-blue-400 text-white font-semibold rounded-lg shadow focus:outline-none focus:shadow-outline" style={{ minWidth: '100px' }}>
            Filter
          </button>
        </div>
      </form>
    </div>
  );
}


export default ItemPage;