# Cardar

Group project - an app that displays cars and their owners

In order to install the dependencies, run npm install

List of sequelize commands to initialize

----Create the database-----
npx dotenv sequelize-cli db:create

----Make the models----------
npx sequelize model:generate --name User --attributes "userName:string,password:string,name:string,email:string,bio:string,joinedOn:timestamp,state:string"
npx sequelize model:generate --name Car --attributes "name:string,model:string,make:string,year:integer,color:string,accidents:integer,features:string,description:string,imageId:integer,ownerId:integer"
npx sequelize model:generate --name Image --attributes "path:string,name:string,carId:integer,userId:integer"
npx sequelize model:generate --name Comment --attributes "message:string,carId:string,ownerId:integer"

---Create the tables----
npx dotenv sequelize db:migrate

---Create seed files and seed database-----
npx sequelize seed:generate --name test-data

\*insert seed data to file

npx dotenv sequelize db:seed:all
