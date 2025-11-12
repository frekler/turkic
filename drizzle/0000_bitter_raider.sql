CREATE TABLE `claims` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`code` text NOT NULL,
	`timestamp` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `claims_code_unique` ON `claims` (`code`);