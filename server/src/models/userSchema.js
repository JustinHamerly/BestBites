const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    virtuals: {
      token: {
        get() {
          return jwt.sign({ username: this.username }, process.env.SECRET)
        },
        set() {
          throw new Error('Do not set the token value');
        }
      }
    },
    methods: {
      async authenticateBasic(username, password) {
        try {
          const user = await this.findOne({ username });
          const isValid = await bcrypt.compare(password, user.password);
          if (isValid) { return user };
          throw new Error('Invalid User')
        } catch (error) {
          throw new Error(error.message);
        }
      },
      async authenticateBearer(token){
        try {
          const parsedToken = jwt.verify(token, process.env.SECRET);
          const user = await this.findOne({ username: parsedToken.username });
          if (user) { return user };
          throw new Error('User not validated');
        } catch (error) {
          throw new Error(error.message)
        }
      }
    }
  }
)

userSchema.pre('save', async function (next) {
  const hashedPass = await bcrypt.hash(this.password, 10);
  this.password = hashedPass;
  next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;
