const mongooseBaseName = "IdeaGeneratorDB"

const database = {
  development: `mongodb://localhost:27017/${mongooseBaseName}`,
  test: `mongodb://localhost:27017/${mongooseBaseName}`
}

const localDb = process.env.PRODUCTION ? database.test : database.development

const currentDb = process.env.DB_URI || localDb

module.exports = currentDb
