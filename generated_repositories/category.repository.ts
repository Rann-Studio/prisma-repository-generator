// https://www.client.io/docs/orm/reference/client-client-reference#model-queries

import { Prisma } from '@prisma/client';
import { client } from './prisma.utils';

export class Category {
	private static client = client;

	static findUnique = async (args: Prisma.CategoryFindUniqueArgs) => {
		return await this.client.category.findUnique(args);
	};

	static findUniqueOrThrow = async (
		args: Prisma.CategoryFindUniqueOrThrowArgs,
	) => {
		return await this.client.category.findUniqueOrThrow(args);
	};

	static findFirst = async (args?: Prisma.CategoryFindFirstArgs) => {
		return await this.client.category.findFirst(args);
	};

	static findFirstOrThrow = async (
		args?: Prisma.CategoryFindFirstOrThrowArgs,
	) => {
		return await this.client.category.findFirstOrThrow(args);
	};

	static findMany = async (args?: Prisma.CategoryFindManyArgs) => {
		return await this.client.category.findMany(args);
	};

	static create = async (args: Prisma.CategoryCreateArgs) => {
		return await this.client.category.create(args);
	};

	static update = async (args: Prisma.CategoryUpdateArgs) => {
		return await this.client.category.update(args);
	};

	static upsert = async (args: Prisma.CategoryUpsertArgs) => {
		return await this.client.category.upsert(args);
	};

	static delete = async (args: Prisma.CategoryDeleteArgs) => {
		return await this.client.category.delete(args);
	};

	static createMany = async (args: Prisma.CategoryCreateManyArgs) => {
		return await this.client.category.createMany(args);
	};

	// createManyAndReturn is only available in Prisma ORM version 5.14.0 and up.
	// createManyAndReturn is only available for PostgreSQL, CockroachDB, and SQLite.
	// uncomment this code section if you want to use it.
	// static createManyAndReturn = async (args: Prisma.CategoryCreateManyAndReturnArgs) => {
	//     return await this.client.category.createManyAndReturn(args);
	// };

	static updateMany = async (args: Prisma.CategoryUpdateManyArgs) => {
		return await this.client.category.updateMany(args);
	};

	static deleteMany = async (args?: Prisma.CategoryDeleteManyArgs) => {
		return await this.client.category.deleteMany(args);
	};

	static count = async (args?: Prisma.CategoryCountArgs) => {
		return await this.client.category.count(args);
	};

	static aggregate = async (args: Prisma.CategoryAggregateArgs) => {
		return await this.client.category.aggregate(args);
	};

	// BUG: Fix scheduled for the next version (release date TBD)
	// static groupBy = async (args?: Prisma.CategoryGroupByArgs) => {
	//     return await this.client.category.groupBy(args);
	// };
}
