import mongoose from 'mongoose'

const TipoClienteSchema = new mongoose.Schema(
  {
    nombre: { type: String, maxLength: 30, required: true, unique: true },
    detalle: { type: String, required: true }
  },
  {
    versionKey: false,
    toObject: {
      transform: function (_doc, ret) {
        ret.idTipoCliente = ret._id
        delete ret._id
      }
    },
    toJSON: {
      transform: function (_doc, ret) {
        ret.idTipoCliente = ret._id
        delete ret._id
      }
    }
  }
)

export default mongoose.model('TipoCliente', TipoClienteSchema)
