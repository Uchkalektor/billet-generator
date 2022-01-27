#!/usr/bin/env node
import meow from 'meow'

const cli = meow(`
	Usage
		$ billet <template-name>
		
	Options
		--template,	-t	Path to template for creation files
		
	Other options:
    -h,	--help	show usage information
    -v,	--version	print version info and exit
`, {
	flags: {
		template: {
			type: 'string',
			alias: 't',
		},
	},
})

export default cli
