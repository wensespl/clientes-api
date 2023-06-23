import mongoose from 'mongoose'

const ClienteSchema = new mongoose.Schema(
  {
    nombre: { type: String, maxLength: 20, required: true },
    dni: {
      type: String,
      minLength: 8,
      maxLength: 8,
      required: true,
      unique: true
    },
    telefono: { type: String, maxLength: 10, required: true },
    correo: { type: String, maxLength: 30, required: true },
    estado: { type: String, maxLength: 1, uppercase: true },
    tipoCliente: {
      ref: 'TipoCliente',
      type: mongoose.Schema.Types.ObjectId,
      poulate: true
    }
  },
  {
    versionKey: false,
    toObject: {
      transform: function (_doc, ret) {
        ret.idCliente = ret._id
        delete ret._id
      }
    },
    toJSON: {
      transform: function (_doc, ret) {
        ret.idCliente = ret._id
        delete ret._id
      }
    }
  }
)

export default mongoose.model('Cliente', ClienteSchema)
