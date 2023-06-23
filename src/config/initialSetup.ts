import TipoClienteModel from '../models/TipoCliente'

export const createTipoCliente = async () => {
  try {
    const count = await TipoClienteModel.estimatedDocumentCount()
    if (count > 0) return
    await Promise.all([
      new TipoClienteModel({
        nombre: 'Ocasional',
        detalle:
          'Clientes que compran por primera vez o lo hacen ocasionalmente, pero sin una frecuencia establecida.'
      }).save(),
      new TipoClienteModel({
        nombre: 'Regular',
        detalle:
          'Suele repetir la compra en el establecimiento, pero en ocasiones también consume en la competencia.'
      }).save(),
      new TipoClienteModel({
        nombre: 'Frecuente',
        detalle:
          'Siempre compra el tipo de productos o servicios que vendemos en nuestro establecimiento.'
      }).save(),
      new TipoClienteModel({
        nombre: 'Embajador',
        detalle:
          'Cumple las características del cliente frecuente pero, además, comparte con sus familiares o compañeros las bondades de nuestra marca, lo que facilita atraer clientes nuevos.'
      }).save()
    ])
  } catch (error) {
    console.error(error)
  }
}
