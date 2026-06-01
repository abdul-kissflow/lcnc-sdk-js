import { BaseSDK, LISTENER_CMDS } from "../core";

interface GetItemsOptions {
	page_number?: number;
	page_size?: number;
	search?: string;
	filterParameters?: Record<string, unknown>;
}

interface GetCountOptions {
	search?: string;
	filterParameters?: Record<string, unknown>;
}

export class Report extends BaseSDK {
	private _flowId: string;
	private _flowType: string;
	private _reportId: string;

	constructor(flowId: string, flowType: string, reportId: string) {
		super();
		this._flowId = flowId;
		this._flowType = flowType;
		this._reportId = reportId;
	}

	getItems(options: GetItemsOptions = {}) {
		return this._postMessageAsync(LISTENER_CMDS.REPORT_GET_ITEMS, {
			flowId: this._flowId,
			flowType: this._flowType,
			reportId: this._reportId,
			...options
		});
	}

	getItemsCount(options: GetCountOptions = {}) {
		return this._postMessageAsync(LISTENER_CMDS.REPORT_GET_ITEMS_COUNT, {
			flowId: this._flowId,
			flowType: this._flowType,
			reportId: this._reportId,
			...options
		});
	}
}
