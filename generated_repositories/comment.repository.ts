// https://www.client.io/docs/orm/reference/client-client-reference#model-queries

import { Prisma } from '@prisma/client';
import { client } from './prisma.utils';

export class Comment {
	private static client = client;

	static findUnique = async (args: Prisma.CommentFindUniqueArgs) => {
		return await this.client.comment.findUnique(args);
	};

	static findUniqueOrThrow = async (
		args: Prisma.CommentFindUniqueOrThrowArgs,
	) => {
		return await this.client.comment.findUniqueOrThrow(args);
	};

	static findFirst = async (args?: Prisma.CommentFindFirstArgs) => {
		return await this.client.comment.findFirst(args);
	};

	static findFirstOrThrow = async (
		args?: Prisma.CommentFindFirstOrThrowArgs,
	) => {
		return await this.client.comment.findFirstOrThrow(args);
	};

	static findMany = async (args?: Prisma.CommentFindManyArgs) => {
		return await this.client.comment.findMany(args);
	};

	static create = async (args: Prisma.CommentCreateArgs) => {
		return await this.client.comment.create(args);
	};

	static update = async (args: Prisma.CommentUpdateArgs) => {
		return await this.client.comment.update(args);
	};

	static upsert = async (args: Prisma.CommentUpsertArgs) => {
		return await this.client.comment.upsert(args);
	};

	static delete = async (args: Prisma.CommentDeleteArgs) => {
		return await this.client.comment.delete(args);
	};

	static createMany = async (args: Prisma.CommentCreateManyArgs) => {
		return await this.client.comment.createMany(args);
	};

	// createManyAndReturn is only available in Prisma ORM version 5.14.0 and up.
	// createManyAndReturn is only available for PostgreSQL, CockroachDB, and SQLite.
	// uncomment this code section if you want to use it.
	// static createManyAndReturn = async (args: Prisma.CommentCreateManyAndReturnArgs) => {
	//     return await this.client.comment.createManyAndReturn(args);
	// };

	static updateMany = async (args: Prisma.CommentUpdateManyArgs) => {
		return await this.client.comment.updateMany(args);
	};

	static deleteMany = async (args?: Prisma.CommentDeleteManyArgs) => {
		return await this.client.comment.deleteMany(args);
	};

	static count = async (args?: Prisma.CommentCountArgs) => {
		return await this.client.comment.count(args);
	};

	static aggregate = async (args: Prisma.CommentAggregateArgs) => {
		return await this.client.comment.aggregate(args);
	};

	// BUG: Fix scheduled for the next version (release date TBD)
	// static groupBy = async (args?: Prisma.CommentGroupByArgs) => {
	//     return await this.client.comment.groupBy(args);
	// };
}
