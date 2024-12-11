// https://www.client.io/docs/orm/reference/client-client-reference#model-queries

import { Prisma } from '@prisma/client';
import { client } from './prisma.utils';

export class UserProfile {
	private static client = client;

	static findUnique = async (options: {
		where: Prisma.UserProfileWhereUniqueInput;
		select?: Prisma.UserProfileSelect;
		include?: Prisma.UserProfileInclude;
		// omit?: Prisma.UserProfileOmit;
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserProfileFindUniqueArgs = {
			where: options.where,
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
		};

		return await this.client.userProfile.findUnique(args);
	};

	static findUniqueOrThrow = async (options: {
		where: Prisma.UserProfileWhereUniqueInput;
		select?: Prisma.UserProfileSelect;
		include?: Prisma.UserProfileInclude;
		// omit?: Prisma.UserProfileOmit;
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserProfileFindUniqueOrThrowArgs = {
			where: options.where,
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
		};

		return await this.client.userProfile.findUniqueOrThrow(args);
	};

	static findFirst = async (options: {
		select?: Prisma.UserProfileSelect;
		include?: Prisma.UserProfileInclude;
		// omit?: Prisma.UserProfileOmit;
		where?: Prisma.UserProfileWhereInput;
		orderBy?:
			| Prisma.UserProfileOrderByWithRelationInput
			| Prisma.UserProfileOrderByWithRelationInput[];
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserProfileFindFirstArgs = {
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
			where: options.where,
			orderBy: options.orderBy,
		};

		return await this.client.userProfile.findFirst(args);
	};

	static findFirstOrThrow = async (options: {
		select?: Prisma.UserProfileSelect;
		include?: Prisma.UserProfileInclude;
		// omit?: Prisma.UserProfileOmit;
		where?: Prisma.UserProfileWhereInput;
		orderBy?:
			| Prisma.UserProfileOrderByWithRelationInput
			| Prisma.UserProfileOrderByWithRelationInput[];
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserProfileFindFirstOrThrowArgs = {
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
			where: options.where,
			orderBy: options.orderBy,
		};

		return await this.client.userProfile.findFirstOrThrow(args);
	};

	static findMany = async (options: {
		select?: Prisma.UserProfileSelect;
		include?: Prisma.UserProfileInclude;
		// omit?: Prisma.UserProfileOmit;
		where?: Prisma.UserProfileWhereInput;
		orderBy?:
			| Prisma.UserProfileOrderByWithRelationInput
			| Prisma.UserProfileOrderByWithRelationInput[];
		cursor?: Prisma.UserProfileWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?:
			| Prisma.UserProfileScalarFieldEnum
			| Prisma.UserProfileScalarFieldEnum[];
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserProfileFindManyArgs = {
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

		return await this.client.userProfile.findMany(args);
	};

	static create = async (options: {
		data: Prisma.UserProfileCreateInput;
		select?: Prisma.UserProfileSelect;
		include?: Prisma.UserProfileInclude;
		// omit?: Prisma.UserProfileOmit;
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserProfileCreateArgs = {
			data: options.data,
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
		};

		return await this.client.userProfile.create(args);
	};

	static update = async (options: {
		data: Prisma.UserProfileUpdateInput;
		where: Prisma.UserProfileWhereUniqueInput;
		select?: Prisma.UserProfileSelect;
		include?: Prisma.UserProfileInclude;
		// omit?: Prisma.UserProfileOmit;
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserProfileUpdateArgs = {
			data: options.data,
			where: options.where,
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
		};

		return await this.client.userProfile.update(args);
	};

	static upsert = async (options: {
		create: Prisma.UserProfileCreateInput;
		update: Prisma.UserProfileUpdateInput;
		where: Prisma.UserProfileWhereUniqueInput;
		select?: Prisma.UserProfileSelect;
		include?: Prisma.UserProfileInclude;
		// omit?: Prisma.UserProfileOmit;
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserProfileUpsertArgs = {
			create: options.create,
			update: options.update,
			where: options.where,
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
		};

		return await this.client.userProfile.upsert(args);
	};

	static delete = async (options: {
		where: Prisma.UserProfileWhereUniqueInput;
		select?: Prisma.UserProfileSelect;
		include?: Prisma.UserProfileInclude;
		// omit?: Prisma.UserProfileOmit;
	}) => {
		if (options.select && options.include) {
			throw new Error("You cannot specify both 'select' and 'include'.");
		}

		const args: Prisma.UserProfileDeleteArgs = {
			where: options.where,
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
		};

		return await this.client.userProfile.delete(args);
	};

	static createMany = async (options: {
		data: Prisma.UserProfileCreateManyInput[];
		// skipDuplicates?: boolean
	}) => {
		const args: Prisma.UserProfileCreateManyArgs = {
			data: options.data,
			// skipDuplicates: options.skipDuplicates,
		};

		return await this.client.userProfile.createMany(args);
	};

	static createManyAndReturn = async (options: {
		data: Prisma.UserProfileCreateManyInput[];
		select?: Prisma.UserProfileSelect;
		include?: Prisma.UserProfileInclude;
		// omit?: Prisma.UserProfileOmit;
		// skipDuplicates?: boolean
	}) => {
		const args: Prisma.UserProfileCreateManyAndReturnArgs = {
			data: options.data,
			...(options.select ? { select: options.select } : {}),
			...(options.include ? { include: options.include } : {}),
			// omit: options.omit,
			// skipDuplicates: options.skipDuplicates,
		};

		return await this.client.userProfile.createManyAndReturn(args);
	};

	static updateMany = async (options: {
		data: Prisma.UserProfileUpdateManyMutationInput;
		where?: Prisma.UserProfileWhereInput;
	}) => {
		const args: Prisma.UserProfileUpdateManyArgs = {
			data: options.data,
			where: options.where,
		};

		return await this.client.userProfile.updateMany(args);
	};

	static deleteMany = async (options: {
		where?: Prisma.UserProfileWhereInput;
	}) => {
		const args: Prisma.UserProfileDeleteManyArgs = {
			where: options.where,
		};

		return await this.client.userProfile.deleteMany(args);
	};

	static count = async (options: {
		where?: Prisma.UserProfileWhereInput;
		orderBy?: Prisma.UserProfileOrderByWithRelationInput;
		cursor?: Prisma.UserProfileWhereUniqueInput;
		take?: number;
		skip?: number;
	}) => {
		const args: Prisma.UserProfileCountArgs = {
			where: options.where,
			orderBy: options.orderBy,
			cursor: options.cursor,
			take: options.take,
			skip: options.skip,
		};

		return await this.client.userProfile.count(args);
	};

	static aggregate = async (options: {
		where?: Prisma.UserProfileWhereInput;
		orderBy?: Prisma.UserProfileOrderByWithRelationInput;
		cursor?: Prisma.UserProfileWhereUniqueInput;
		take?: number;
		skip?: number;
		_count?: true | Prisma.UserProfileCountAggregateInputType;
		_avg?: Prisma.UserProfileAvgAggregateInputType;
		_sum?: Prisma.UserProfileSumAggregateInputType;
		_min?: Prisma.UserProfileMinAggregateInputType;
		_max?: Prisma.UserProfileMaxAggregateInputType;
	}) => {
		const args: Prisma.UserProfileAggregateArgs = {
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

		return await this.client.userProfile.aggregate(args);
	};

	// BUG: Prisma Bugs
	// static groupBy = async (options: {
	//     by: Prisma.UserProfileScalarFieldEnum | Prisma.UserProfileScalarFieldEnum[];
	//     orderBy: Prisma.UserProfileOrderByWithAggregationInput | Prisma.UserProfileOrderByWithAggregationInput[] | undefined;
	//     where: Prisma.UserProfileWhereInput;
	//     having: Prisma.UserProfileScalarWhereWithAggregatesInput;
	//     take: number;
	//     skip: number;
	//     _count: true | Prisma.UserProfileCountAggregateInputType;
	//     _avg: Prisma.UserProfileAvgAggregateInputType;
	//     _sum: Prisma.UserProfileSumAggregateInputType;
	//     _min: Prisma.UserProfileMinAggregateInputType;
	//     _max: Prisma.UserProfileMaxAggregateInputType;
	// }) => {
	//     const args: Prisma.UserProfileGroupByArgs = {
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

	//     return await this.client.userProfile.groupBy(args);
	// };
}
