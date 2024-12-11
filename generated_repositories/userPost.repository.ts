// https://www.client.io/docs/orm/reference/client-client-reference#model-queries

import { Prisma } from '@prisma/client';
import { client } from './prisma.utils';

export class UserPost {
	private static client = client;

	static findUnique = async (options: {
		where: Prisma.UserPostWhereUniqueInput;
		select?: Prisma.UserPostSelect;
		include?: Prisma.UserPostInclude;
		// omit?: Prisma.UserPostOmit;
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserPostFindUniqueArgs = {
			where: options.where,
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
		};

		return await this.client.userPost.findUnique(args);
	};

	static findUniqueOrThrow = async (options: {
		where: Prisma.UserPostWhereUniqueInput;
		select?: Prisma.UserPostSelect;
		include?: Prisma.UserPostInclude;
		// omit?: Prisma.UserPostOmit;
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserPostFindUniqueOrThrowArgs = {
			where: options.where,
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
		};

		return await this.client.userPost.findUniqueOrThrow(args);
	};

	static findFirst = async (options: {
		select?: Prisma.UserPostSelect;
		include?: Prisma.UserPostInclude;
		// omit?: Prisma.UserPostOmit;
		where?: Prisma.UserPostWhereInput;
		orderBy?:
			| Prisma.UserPostOrderByWithRelationInput
			| Prisma.UserPostOrderByWithRelationInput[];
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserPostFindFirstArgs = {
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
			where: options.where,
			orderBy: options.orderBy,
		};

		return await this.client.userPost.findFirst(args);
	};

	static findFirstOrThrow = async (options: {
		select?: Prisma.UserPostSelect;
		include?: Prisma.UserPostInclude;
		// omit?: Prisma.UserPostOmit;
		where?: Prisma.UserPostWhereInput;
		orderBy?:
			| Prisma.UserPostOrderByWithRelationInput
			| Prisma.UserPostOrderByWithRelationInput[];
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserPostFindFirstOrThrowArgs = {
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
			where: options.where,
			orderBy: options.orderBy,
		};

		return await this.client.userPost.findFirstOrThrow(args);
	};

	static findMany = async (options: {
		select?: Prisma.UserPostSelect;
		include?: Prisma.UserPostInclude;
		// omit?: Prisma.UserPostOmit;
		where?: Prisma.UserPostWhereInput;
		orderBy?:
			| Prisma.UserPostOrderByWithRelationInput
			| Prisma.UserPostOrderByWithRelationInput[];
		cursor?: Prisma.UserPostWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?:
			| Prisma.UserPostScalarFieldEnum
			| Prisma.UserPostScalarFieldEnum[];
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserPostFindManyArgs = {
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
			where: options.where,
			orderBy: options.orderBy,
			cursor: options.cursor,
			skip: options.skip,
			take: options.take,
			distinct: options.distinct,
		};

		return await this.client.userPost.findMany(args);
	};

	static create = async (options: {
		data: Prisma.UserPostCreateInput;
		select?: Prisma.UserPostSelect;
		include?: Prisma.UserPostInclude;
		// omit?: Prisma.UserPostOmit;
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserPostCreateArgs = {
			data: options.data,
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
		};

		return await this.client.userPost.create(args);
	};

	static update = async (options: {
		data: Prisma.UserPostUpdateInput;
		where: Prisma.UserPostWhereUniqueInput;
		select?: Prisma.UserPostSelect;
		include?: Prisma.UserPostInclude;
		// omit?: Prisma.UserPostOmit;
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserPostUpdateArgs = {
			data: options.data,
			where: options.where,
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
		};

		return await this.client.userPost.update(args);
	};

	static upsert = async (options: {
		create: Prisma.UserPostCreateInput;
		update: Prisma.UserPostUpdateInput;
		where: Prisma.UserPostWhereUniqueInput;
		select?: Prisma.UserPostSelect;
		include?: Prisma.UserPostInclude;
		// omit?: Prisma.UserPostOmit;
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserPostUpsertArgs = {
			create: options.create,
			update: options.update,
			where: options.where,
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
		};

		return await this.client.userPost.upsert(args);
	};

	static delete = async (options: {
		where: Prisma.UserPostWhereUniqueInput;
		select?: Prisma.UserPostSelect;
		include?: Prisma.UserPostInclude;
		// omit?: Prisma.UserPostOmit;
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserPostDeleteArgs = {
			where: options.where,
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
		};

		return await this.client.userPost.delete(args);
	};

	static createMany = async (options: {
		data: Prisma.UserPostCreateManyInput[];
		// skipDuplicates?: boolean
	}) => {
		const args: Prisma.UserPostCreateManyArgs = {
			data: options.data,
			// skipDuplicates: options.skipDuplicates,
		};

		return await this.client.userPost.createMany(args);
	};

	static createManyAndReturn = async (options: {
		data: Prisma.UserPostCreateManyInput[];
		select?: Prisma.UserPostSelect;
		include?: Prisma.UserPostInclude;
		// omit?: Prisma.UserPostOmit;
		// skipDuplicates?: boolean
	}) => {
		const args: Prisma.UserPostCreateManyAndReturnArgs = {
			data: options.data,
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
			// skipDuplicates: options.skipDuplicates,
		};

		return await this.client.userPost.createManyAndReturn(args);
	};

	static updateMany = async (options: {
		data: Prisma.UserPostUpdateManyMutationInput;
		where?: Prisma.UserPostWhereInput;
	}) => {
		const args: Prisma.UserPostUpdateManyArgs = {
			data: options.data,
			where: options.where,
		};

		return await this.client.userPost.updateMany(args);
	};

	static deleteMany = async (options: {
		where?: Prisma.UserPostWhereInput;
	}) => {
		const args: Prisma.UserPostDeleteManyArgs = {
			where: options.where,
		};

		return await this.client.userPost.deleteMany(args);
	};

	static count = async (options: {
		where?: Prisma.UserPostWhereInput;
		orderBy?: Prisma.UserPostOrderByWithRelationInput;
		cursor?: Prisma.UserPostWhereUniqueInput;
		take?: number;
		skip?: number;
	}) => {
		const args: Prisma.UserPostCountArgs = {
			where: options.where,
			orderBy: options.orderBy,
			cursor: options.cursor,
			take: options.take,
			skip: options.skip,
		};

		return await this.client.userPost.count(args);
	};

	static aggregate = async (options: {
		where?: Prisma.UserPostWhereInput;
		orderBy?: Prisma.UserPostOrderByWithRelationInput;
		cursor?: Prisma.UserPostWhereUniqueInput;
		take?: number;
		skip?: number;
		_count?: true | Prisma.UserPostCountAggregateInputType;
		_avg?: Prisma.UserPostAvgAggregateInputType;
		_sum?: Prisma.UserPostSumAggregateInputType;
		_min?: Prisma.UserPostMinAggregateInputType;
		_max?: Prisma.UserPostMaxAggregateInputType;
	}) => {
		const args: Prisma.UserPostAggregateArgs = {
			where: options.where,
			orderBy: options.orderBy,
			cursor: options.cursor,
			take: options.take,
			skip: options.skip,
			_count: options._count,
			_avg: options._avg,
			_sum: options._sum,
			_min: options._min,
			_max: options._max,
		};

		return await this.client.userPost.aggregate(args);
	};

	// BUG: Prisma Bugs
	// static groupBy = async (options: {
	//     by: Prisma.UserPostScalarFieldEnum | Prisma.UserPostScalarFieldEnum[];
	//     orderBy: Prisma.UserPostOrderByWithAggregationInput | Prisma.UserPostOrderByWithAggregationInput[] | undefined;
	//     where: Prisma.UserPostWhereInput;
	//     having: Prisma.UserPostScalarWhereWithAggregatesInput;
	//     take: number;
	//     skip: number;
	//     _count: true | Prisma.UserPostCountAggregateInputType;
	//     _avg: Prisma.UserPostAvgAggregateInputType;
	//     _sum: Prisma.UserPostSumAggregateInputType;
	//     _min: Prisma.UserPostMinAggregateInputType;
	//     _max: Prisma.UserPostMaxAggregateInputType;
	// }) => {
	//     const args: Prisma.UserPostGroupByArgs = {
	//         by: options.by,
	//         where: options.where,
	//         orderBy: options.orderBy,
	//         having: options.having,
	//         take: options.take,
	//         skip: options.skip,
	//         _count: options._count,
	//         _avg: options._avg,
	//         _sum: options._sum,
	//         _min: options._min,
	//         _max: options._max,
	//     };

	//     return await this.client.userPost.groupBy(args);
	// };
}
