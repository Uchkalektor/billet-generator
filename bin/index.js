#!/usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const usage = '\nUsage: billet <template_name> to create billet files from template'

const options = yargs(hideBin(process.argv)).usage(usage)
	.option('t', {
		alias: 'template', describe: 'Path to template file', type: 'string', demandOption: false,
	})
	.help(true)
	.argv
