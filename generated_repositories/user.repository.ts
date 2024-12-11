// https://www.client.io/docs/orm/reference/client-client-reference#model-queries

import { Prisma } from '@prisma/client';
import { client } from './prisma.utils';

export class User {
	private static client = client;

	static findUnique = async (options: {
		where: Prisma.UserWhereUniqueInput;
		select?: Prisma.UserSelect;
		include?: Prisma.UserInclude;
		// omit?: Prisma.UserOmit;
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserFindUniqueArgs = {
			where: options.where,
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
		};

		return await this.client.user.findUnique(args);
	};

	static findUniqueOrThrow = async (options: {
		where: Prisma.UserWhereUniqueInput;
		select?: Prisma.UserSelect;
		include?: Prisma.UserInclude;
		// omit?: Prisma.UserOmit;
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserFindUniqueOrThrowArgs = {
			where: options.where,
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
		};

		return await this.client.user.findUniqueOrThrow(args);
	};

	static findFirst = async (options: {
		select?: Prisma.UserSelect;
		include?: Prisma.UserInclude;
		// omit?: Prisma.UserOmit;
		where?: Prisma.UserWhereInput;
		orderBy?:
			| Prisma.UserOrderByWithRelationInput
			| Prisma.UserOrderByWithRelationInput[];
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserFindFirstArgs = {
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
			where: options.where,
			orderBy: options.orderBy,
		};

		return await this.client.user.findFirst(args);
	};

	static findFirstOrThrow = async (options: {
		select?: Prisma.UserSelect;
		include?: Prisma.UserInclude;
		// omit?: Prisma.UserOmit;
		where?: Prisma.UserWhereInput;
		orderBy?:
			| Prisma.UserOrderByWithRelationInput
			| Prisma.UserOrderByWithRelationInput[];
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserFindFirstOrThrowArgs = {
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
			where: options.where,
			orderBy: options.orderBy,
		};

		return await this.client.user.findFirstOrThrow(args);
	};

	static findMany = async (options: {
		select?: Prisma.UserSelect;
		include?: Prisma.UserInclude;
		// omit?: Prisma.UserOmit;
		where?: Prisma.UserWhereInput;
		orderBy?:
			| Prisma.UserOrderByWithRelationInput
			| Prisma.UserOrderByWithRelationInput[];
		cursor?: Prisma.UserWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserFindManyArgs = {
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

		return await this.client.user.findMany(args);
	};

	static create = async (options: {
		data: Prisma.UserCreateInput;
		select?: Prisma.UserSelect;
		include?: Prisma.UserInclude;
		// omit?: Prisma.UserOmit;
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserCreateArgs = {
			data: options.data,
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
		};

		return await this.client.user.create(args);
	};

	static update = async (options: {
		data: Prisma.UserUpdateInput;
		where: Prisma.UserWhereUniqueInput;
		select?: Prisma.UserSelect;
		include?: Prisma.UserInclude;
		// omit?: Prisma.UserOmit;
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserUpdateArgs = {
			data: options.data,
			where: options.where,
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
		};

		return await this.client.user.update(args);
	};

	static upsert = async (options: {
		create: Prisma.UserCreateInput;
		update: Prisma.UserUpdateInput;
		where: Prisma.UserWhereUniqueInput;
		select?: Prisma.UserSelect;
		include?: Prisma.UserInclude;
		// omit?: Prisma.UserOmit;
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserUpsertArgs = {
			create: options.create,
			update: options.update,
			where: options.where,
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
		};

		return await this.client.user.upsert(args);
	};

	static delete = async (options: {
		where: Prisma.UserWhereUniqueInput;
		select?: Prisma.UserSelect;
		include?: Prisma.UserInclude;
		// omit?: Prisma.UserOmit;
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserDeleteArgs = {
			where: options.where,
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
		};

		return await this.client.user.delete(args);
	};

	static createMany = async (options: {
		data: Prisma.UserCreateManyInput[];
		// skipDuplicates?: boolean
	}) => {
		const args: Prisma.UserCreateManyArgs = {
			data: options.data,
			// skipDuplicates: options.skipDuplicates,
		};

		return await this.client.user.createMany(args);
	};

	static createManyAndReturn = async (options: {
		data: Prisma.UserCreateManyInput[];
		select?: Prisma.UserSelect;
		include?: Prisma.UserInclude;
		// omit?: Prisma.UserOmit;
		// skipDuplicates?: boolean
	}) => {
		const args: Prisma.UserCreateManyAndReturnArgs = {
			data: options.data,
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
			// skipDuplicates: options.skipDuplicates,
		};

		return await this.client.user.createManyAndReturn(args);
	};

	static updateMany = async (options: {
		data: Prisma.UserUpdateManyMutationInput;
		where?: Prisma.UserWhereInput;
	}) => {
		const args: Prisma.UserUpdateManyArgs = {
			data: options.data,
			where: options.where,
		};

		return await this.client.user.updateMany(args);
	};

	static deleteMany = async (options: { where?: Prisma.UserWhereInput }) => {
		const args: Prisma.UserDeleteManyArgs = {
			where: options.where,
		};

		return await this.client.user.deleteMany(args);
	};

	static count = async (options: {
		where?: Prisma.UserWhereInput;
		orderBy?: Prisma.UserOrderByWithRelationInput;
		cursor?: Prisma.UserWhereUniqueInput;
		take?: number;
		skip?: number;
	}) => {
		const args: Prisma.UserCountArgs = {
			where: options.where,
			orderBy: options.orderBy,
			cursor: options.cursor,
			take: options.take,
			skip: options.skip,
		};

		return await this.client.user.count(args);
	};

	static aggregate = async (options: {
		where?: Prisma.UserWhereInput;
		orderBy?: Prisma.UserOrderByWithRelationInput;
		cursor?: Prisma.UserWhereUniqueInput;
		take?: number;
		skip?: number;
		_count?: true | Prisma.UserCountAggregateInputType;
		_avg?: Prisma.UserAvgAggregateInputType;
		_sum?: Prisma.UserSumAggregateInputType;
		_min?: Prisma.UserMinAggregateInputType;
		_max?: Prisma.UserMaxAggregateInputType;
	}) => {
		const args: Prisma.UserAggregateArgs = {
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

		return await this.client.user.aggregate(args);
	};

	// BUG: Prisma Bugs
	// static groupBy = async (options: {
	//     by: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
	//     orderBy: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[] | undefined;
	//     where: Prisma.UserWhereInput;
	//     having: Prisma.UserScalarWhereWithAggregatesInput;
	//     take: number;
	//     skip: number;
	//     _count: true | Prisma.UserCountAggregateInputType;
	//     _avg: Prisma.UserAvgAggregateInputType;
	//     _sum: Prisma.UserSumAggregateInputType;
	//     _min: Prisma.UserMinAggregateInputType;
	//     _max: Prisma.UserMaxAggregateInputType;
	// }) => {
	//     const args: Prisma.UserGroupByArgs = {
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

	//     return await this.client.user.groupBy(args);
	// };
}
