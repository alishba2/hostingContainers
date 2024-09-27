import React, { useState, useEffect } from 'react';
import "../style/pages/_product.scss";
import { saveProduct, getAllProducts, deleteProduct } from '../firebase/firebase';
import { notification, Form, Input, Select, Button, Upload, Table } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { Option } = Select;

export default function Product() {
    const { Column } = Table;
    const [categoryFields, setCategoryFields] = useState([]);
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        type: 'Miners',
        price: '',
        power: '',
        hashRate: '',
        algorithm: '',
        powerSupply: '',
        coolingType: '',
        images: [],
        description: '',
        dimensions: '',
        weight: '',
        material: '',
        capacity: '',
        ventilation: '',
        powerSupplyCompatibility: '',
        insulation: '',
        temperatureRange: '',
        portability: '',
        numberOfRacks: '',
        coolingSystem: '',
        powerRequirements: '',
        securityFeatures: '',
        efficiency: '',
        supportedCoins: '',
        operatingTemperature: '',
        noiseLevel: '',
        connectivity: '',
        firmware: '',
        warranty: '',
        manufacturer: '',
        additionalFeatures: '',
        kasHashRate: '',
        wallPower: '',
        specifications: '',
        dimensionsWithPackaging: '',
        grossWeight: '',
        netWeight: '',
        connection: '',
        voltageInput: '',
        operatingTemp: ''
    });
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        try {
            const productsData = await getAllProducts();
            setProducts(productsData);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({
            ...newProduct,
            [name]: value
        });
    };


    const handleImageChange = (file) => {
        if (file && file.type.startsWith('image/')) {
            const existingImage = newProduct.images.find(img => img.name === file.name);
            if (!existingImage) {
                setNewProduct((prev) => ({
                    ...prev,
                    images: [...prev.images, file]
                }));
            } else {
                notification.error({
                    message: "Duplicate Image",
                    description: "This image has already been uploaded.",
                });
            }
        } else {
            notification.error({
                message: "Invalid File Type",
                description: "Please select an image file.",
            });
        }
    };

    const handleRemoveImage = (index) => {
        setNewProduct((prev) => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index)
        }));
    };

    useEffect(() => {
        console.log(newProduct, "new product");

    }, [newProduct])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);


        try {
            const productToSave = { ...newProduct };
            if (productToSave?.length < 0) {
                alert("Add image to continure");
                return;
            }
            await saveProduct(productToSave);
            setProducts([...products, productToSave]);
            setNewProduct({
                name: '',
                type: 'Miners',
                price: '',
                power: '',
                hashRate: '',
                algorithm: '',
                powerSupply: '',
                coolingType: '',
                images: [],
                description: '',
                dimensions: '',
                weight: '',
                material: '',
                capacity: '',
                ventilation: '',
                powerSupplyCompatibility: '',
                insulation: '',
                temperatureRange: '',
                portability: '',
                numberOfRacks: '',
                coolingSystem: '',
                powerRequirements: '',
                securityFeatures: '',
                efficiency: '',
                supportedCoins: '',
                operatingTemperature: '',
                noiseLevel: '',
                connectivity: '',
                firmware: '',
                warranty: '',
                manufacturer: '',
                additionalFeatures: '',
                kasHashRate: '',
                wallPower: '',
                specifications: '',
                dimensionsWithPackaging: '',
                grossWeight: '',
                netWeight: '',
                connection: '',
                voltageInput: '',
                operatingTemp: ''
            });
            notification.success({
                message: "Success",
                description: "Product saved successfully!",
            });
            fetchProducts();
            setShowForm(false);
        } catch (error) {
            console.error("Error saving product:", error);
            notification.error({
                message: "Error",
                description: "There was an error saving the product.",
            });
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (productId) => {
        try {
            await deleteProduct(productId);
            notification.success({
                message: "Success",
                description: "Product deleted successfully!",
            });
            fetchProducts();
        } catch (error) {
            console.error("Error deleting product:", error);
            notification.error({
                message: "Error",
                description: "There was an error deleting the product.",
            });
        }
    };

    const handleCategoryChange = (value) => {
        setNewProduct({ ...newProduct, type: value });
        const fields = {
            Miners: [
                'hashRate', 'algorithm', 'powerSupply', 'dimensions', 'weight', 'coolingType',
                'kasHashRate', 'wallPower', 'specifications', 'dimensionsWithPackaging',
                'grossWeight', 'netWeight', 'connection', 'voltageInput', 'operatingTemp'
            ],
            'Mining Containers': ['dimensions', 'weight', 'material', 'capacity', 'ventilation', 'powerSupplyCompatibility', 'insulation', 'temperatureRange', 'portability', 'numberOfRacks', 'coolingSystem', 'powerRequirements', 'securityFeatures'],
            'Hash Chips': ['hashRate', 'powerConsumption', 'efficiency', 'supportedCoins', 'operatingTemperature', 'noiseLevel', 'dimensions', 'weight', 'coolingSystem', 'connectivity', 'firmware', 'warranty', 'manufacturer', 'additionalFeatures'],
            CoolingFans: ['dimensions', 'weight', 'power', 'coolingType', 'noiseLevel', 'powerRequirements', 'additionalFeatures'],
            Others: ['specifications']
        };
        setCategoryFields(fields[value] || []);
    };

    return (
        <div className="product-page">
            <Button type="primary" onClick={() => setShowForm(true)}>Add New Product</Button>

            {showForm ? (
                <div className="product-form">
                    <h2 style={{ color: 'white' }}>Add New Product</h2>
                    <Form layout="vertical" style={{ background: "white", padding: '40px' }}>
                        <Form.Item label="Name" required>
                            <Input name="name" value={newProduct.name} onChange={handleInputChange} />
                        </Form.Item>
                        <Form.Item label="Category" required>
                            <Select name="type" value={newProduct.type} onChange={handleCategoryChange}>
                                <Option value="Miners">Miners</Option>
                                <Option value="Mining Containers">Mining Containers</Option>
                                <Option value="Hash Chips">Hash Chips</Option>
                                {/* <Option value="Others">Cooling Fans</Option> */}
                                <Option value="Others">Accessories</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Price" required>
                            <Input type="number" name="price" value={newProduct.price} onChange={handleInputChange} />
                        </Form.Item>
                        <Form.Item label="Power" required>
                            <Input type="number" name="power" value={newProduct.power} onChange={handleInputChange} />
                        </Form.Item>
                        {categoryFields.includes('hashRate') && (
                            <Form.Item label="Hash Rate" required>
                                <Input name="hashRate" value={newProduct.hashRate} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('algorithm') && (
                            <Form.Item label="Algorithm" required>
                                <Input name="algorithm" value={newProduct.algorithm} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('powerSupply') && (
                            <Form.Item label="Power Supply" required>
                                <Input name="powerSupply" value={newProduct.powerSupply} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('coolingType') && (
                            <Form.Item label="Cooling Type">
                                <Input name="coolingType" value={newProduct.coolingType} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('dimensions') && (
                            <Form.Item label="Dimensions (Length, Width, Height)" required>
                                <Input name="dimensions" value={newProduct.dimensions} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('weight') && (
                            <Form.Item label="Weight" required>
                                <Input name="weight" value={newProduct.weight} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('material') && (
                            <Form.Item label="Material" required>
                                <Input name="material" value={newProduct.material} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('capacity') && (
                            <Form.Item label="Capacity">
                                <Input name="capacity" value={newProduct.capacity} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('ventilation') && (
                            <Form.Item label="Ventilation">
                                <Input name="ventilation" value={newProduct.ventilation} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('powerSupplyCompatibility') && (
                            <Form.Item label="Power Supply Compatibility">
                                <Input name="powerSupplyCompatibility" value={newProduct.powerSupplyCompatibility} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('insulation') && (
                            <Form.Item label="Insulation">
                                <Input name="insulation" value={newProduct.insulation} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('temperatureRange') && (
                            <Form.Item label="Temperature Range">
                                <Input name="temperatureRange" value={newProduct.temperatureRange} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('portability') && (
                            <Form.Item label="Portability">
                                <Input name="portability" value={newProduct.portability} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('numberOfRacks') && (
                            <Form.Item label="Number of Racks">
                                <Input name="numberOfRacks" value={newProduct.numberOfRacks} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('coolingSystem') && (
                            <Form.Item label="Cooling System">
                                <Input name="coolingSystem" value={newProduct.coolingSystem} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('powerRequirements') && (
                            <Form.Item label="Power Requirements">
                                <Input name="powerRequirements" value={newProduct.powerRequirements} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('securityFeatures') && (
                            <Form.Item label="Security Features">
                                <Input name="securityFeatures" value={newProduct.securityFeatures} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('efficiency') && (
                            <Form.Item label="Efficiency">
                                <Input name="efficiency" value={newProduct.efficiency} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('supportedCoins') && (
                            <Form.Item label="Supported Coins">
                                <Input name="supportedCoins" value={newProduct.supportedCoins} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('operatingTemperature') && (
                            <Form.Item label="Operating Temperature">
                                <Input name="operatingTemperature" value={newProduct.operatingTemperature} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('noiseLevel') && (
                            <Form.Item label="Noise Level">
                                <Input name="noiseLevel" value={newProduct.noiseLevel} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('connectivity') && (
                            <Form.Item label="Connectivity">
                                <Input name="connectivity" value={newProduct.connectivity} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('firmware') && (
                            <Form.Item label="Firmware">
                                <Input name="firmware" value={newProduct.firmware} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('warranty') && (
                            <Form.Item label="Warranty">
                                <Input name="warranty" value={newProduct.warranty} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('manufacturer') && (
                            <Form.Item label="Manufacturer">
                                <Input name="manufacturer" value={newProduct.manufacturer} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('additionalFeatures') && (
                            <Form.Item label="Additional Features">
                                <Input name="additionalFeatures" value={newProduct.additionalFeatures} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('kasHashRate') && (
                            <Form.Item label="Kas Hash Rate">
                                <Input name="kasHashRate" value={newProduct.kasHashRate} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('wallPower') && (
                            <Form.Item label="Wall Power">
                                <Input name="wallPower" value={newProduct.wallPower} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('specifications') && (
                            <Form.Item label="Specifications">
                                <Input name="specifications" value={newProduct.specifications} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('dimensionsWithPackaging') && (
                            <Form.Item label="Dimensions with Packaging">
                                <Input name="dimensionsWithPackaging" value={newProduct.dimensionsWithPackaging} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('grossWeight') && (
                            <Form.Item label="Gross Weight">
                                <Input name="grossWeight" value={newProduct.grossWeight} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('netWeight') && (
                            <Form.Item label="Net Weight">
                                <Input name="netWeight" value={newProduct.netWeight} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('connection') && (
                            <Form.Item label="Connection">
                                <Input name="connection" value={newProduct.connection} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('voltageInput') && (
                            <Form.Item label="Voltage Input">
                                <Input name="voltageInput" value={newProduct.voltageInput} onChange={handleInputChange} />
                            </Form.Item>
                        )}
                        {categoryFields.includes('operatingTemp') && (
                            <Form.Item label="Operating Temp">
                                <Input name="operatingTemp" value={newProduct.operatingTemp} onChange={handleInputChange} />
                            </Form.Item>
                        )}

                        <Form.Item label="Images">
                            <Upload
                                beforeUpload={handleImageChange}
                                onRemove={(file) => handleRemoveImage(newProduct.images.indexOf(file))}
                                fileList={newProduct.images.map((img, index) => ({
                                    uid: index,
                                    name: img.name,
                                    status: 'done'
                                }))}
                                showUploadList={true}
                            >
                                <Button>Upload</Button>
                            </Upload>
                            {newProduct.images.length > 0 && newProduct.images.map((image, index) => (
                                <div key={index} className="uploaded-file">
                                    <span>{image.name}</span>
                                    <Button type="link" icon={<CloseOutlined />} onClick={() => handleRemoveImage(index)}>Remove</Button>
                                </div>
                            ))}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" loading={loading} disabled={loading} onClick={handleSubmit}>Submit</Button>
                        </Form.Item>
                    </Form>
                    <Button onClick={() => setShowForm(false)}>Cancel</Button>
                </div>
            ) : (
                <Table dataSource={products} rowKey="id">
                    <Column title="Name" dataIndex="name" key="name" />
                    <Column title="Category" dataIndex="type" key="type" />
                    <Column title="Price" dataIndex="price" key="price" />
                    <Column title="Actions" key="actions" render={(text, record) => (
                        <Button onClick={() => handleDelete(record.id)}>Delete</Button>
                    )} />
                </Table>
            )}
        </div>
    );
}
