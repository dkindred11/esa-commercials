/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Configschema {
	/**
	 * This toggles if on the 1st/2nd stream if applicable for your event.
	 */
	thisEvent: number;
	obs: {
		enable: boolean;
		address: string;
		password: string;
		/**
		 * Name of the scene in OBS you wish to start running non-run based commercials on when switched to.
		 */
		nonRunCommercialTriggerScene: string;
		/**
		 * Name(s) of the scene(s) in OBS you wish to allow non-run based commercials to continue running on.
		 */
		nonRunCommercialScenes: string | [string, ...string[]];
	};
	/**
	 * Needed if using our external server to run commercials.
	 */
	server: {
		enable: boolean;
		address: string;
		token: string;
		/**
		 * Name(s) of the channel(s) commercials shall be ran on.
		 */
		channels: string | [string, ...string[]];
	};
}
