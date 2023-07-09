const resolvers = {
  Mutation: {
    createUser: async (parent, args) => {
      const { name, lastName, email, password } = args;
      console.log("Creating new user", {
        name, lastName, email, password
      });
      return {
        name, lastName, email, password, createdAt: new Date().toISOString()
      };
    }

  }
};

module.exports = { resolvers };