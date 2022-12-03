import Producto from "../models/Producto.js";

export const getAll = async (req, res) => {
  try {
    const productos = await Producto.findAll();

    res.json(productos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;

    const producto = await Producto.findByPk(id);

    res.json(producto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { Nombre, Precio, Descripcion, Imagen, Categoria_ID } = req.body;

    const crearProducto = await Producto.create({
      Nombre,
      Precio,
      Descripcion,
      Imagen,
      Categoria_ID,
    });

    res.json(crearProducto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    const actualizaProducto = await Producto.findByPk(id);

    actualizaProducto.set(req.body);

    await actualizaProducto.save();

    res.json(actualizaProducto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const eliminarProducto = await Producto.destroy({
      where: { Producto_ID: id },
    });

    res.json(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
