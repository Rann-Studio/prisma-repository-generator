// https://www.client.io/docs/orm/reference/client-client-reference#model-queries

import { Prisma } from '@prisma/client';
import { client } from './prisma.utils';

export class Post {
	private static client = client;

	static findUnique = async (args: Prisma.PostFindUniqueArgs) => {
		return await this.client.post.findUnique(args);
	};

	static findUniqueOrThrow = async (
		args: Prisma.PostFindUniqueOrThrowArgs,
	) => {
		return await this.client.post.findUniqueOrThrow(args);
	};

	static findFirst = async (args?: Prisma.PostFindFirstArgs) => {
		return await this.client.post.findFirst(args);
	};

	static findFirstOrThrow = async (
		args?: Prisma.PostFindFirstOrThrowArgs,
	) => {
		return await this.client.post.findFirstOrThrow(args);
	};

	static findMany = async (args?: Prisma.PostFindManyArgs) => {
		return await this.client.post.findMany(args);
	};

	static create = async (args: Prisma.PostCreateArgs) => {
		return await this.client.post.create(args);
	};

	static update = async (args: Prisma.PostUpdateArgs) => {
		return await this.client.post.update(args);
	};

	static upsert = async (args: Prisma.PostUpsertArgs) => {
		return await this.client.post.upsert(args);
	};

	static delete = async (args: Prisma.PostDeleteArgs) => {
		return await this.client.post.delete(args);
	};

	static createMany = async (args: Prisma.PostCreateManyArgs) => {
		return await this.client.post.createMany(args);
	};

	// createManyAndReturn is only available in Prisma ORM version 5.14.0 and up.
	// createManyAndReturn is only available for PostgreSQL, CockroachDB, and SQLite.
	// uncomment this code section if you want to use it.
	// static createManyAndReturn = async (args: Prisma.PostCreateManyAndReturnArgs) => {
	//     return await this.client.post.createManyAndReturn(args);
	// };

	static updateMany = async (args: Prisma.PostUpdateManyArgs) => {
		return await this.client.post.updateMany(args);
	};

	static deleteMany = async (args?: Prisma.PostDeleteManyArgs) => {
		return await this.client.post.deleteMany(args);
	};

	static count = async (args?: Prisma.PostCountArgs) => {
		return await this.client.post.count(args);
	};

	static aggregate = async (args: Prisma.PostAggregateArgs) => {
		return await this.client.post.aggregate(args);
	};

	// BUG: Fix scheduled for the next version (release date TBD)
	// static groupBy = async (args?: Prisma.PostGroupByArgs) => {
	//     return await this.client.post.groupBy(args);
	// };
}
