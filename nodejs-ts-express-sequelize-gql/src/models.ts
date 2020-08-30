import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, Association, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from 'sequelize';

class User extends Model {
    public id!: number;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public getProjects!: HasManyGetAssociationsMixin<Project>;
    public addProject!: HasManyAddAssociationMixin<Project, number>;
    public hasProject!: HasManyHasAssociationMixin<Project, number>;
    public countProjects!: HasManyCountAssociationsMixin;
    public createProject!: HasManyCreateAssociationMixin<Project>;

    public readonly projects?: Project[];

    public static associations: {
        projects: Association<User, Project>;
    };
}


class Project extends Model {
    public id!: number;
    public ownerId!: number;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Employee
//     .create({ name: 'John Doe', title: 'senior engineer' })
//     .then(function(employee) {
//         console.log(employee.get('name')); // John Doe (SENIOR ENGINEER)
//         console.log(employee.get('title')); // SENIOR ENGINEER
//     })


export { User, Project };
