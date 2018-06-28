//this model represents topic creation request
export class Topic {
    constructor( public name: string='',
                 public readUser: string='',
                 public partitions: number,
                 public retentionms: number,
                 public unit: String='',
                 public retentionBytes: number,
                 public compaction: boolean)
    {}
}
