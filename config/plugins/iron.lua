return {
	{
		"Vigemus/iron.nvim", -- Installs the plugin from GitHub.
		config = function()
			local iron = require("iron.core")
			local view = require("iron.view")
			local common = require("iron.fts.common")

			iron.setup({
				config = {
					scratch_repl = true, -- Whether a REPL should be discarded or not.
					repl_definition = {
						sh = {
							command = { "zsh" },
						},
						python = {
							command = { "python3" }, -- or { "ipython", "--no-autoindent" } if you prefer.
							format = common.bracketed_paste_python,
							block_dividers = { "# %%", "#%%" },
						},
					},
					repl_filetype = function(bufnr, ft)
						return ft -- Sets the filetype of the created REPL to match the language.
					end,
					-- Configuring the REPL window appearance:
					repl_open_cmd = view.bottom(40),
					-- You can also provide multiple commands using a table (see iron.nvim documentation).
				},
				keymaps = {
					toggle_repl = "<space>rr", -- toggles the REPL open and closed.
					restart_repl = "<space>rR", -- restart the REPL.
					send_motion = "<space>sc", -- send a motion.
					visual_send = "<space>sc", -- send visual selection.
					send_file = "<space>sf", -- send entire file.
					send_line = "<space>sl", -- send current line.
					send_paragraph = "<space>sp", -- send a paragraph.
					send_until_cursor = "<space>su", -- send from the beginning until the cursor.
					send_mark = "<space>sm", -- send marked region.
					send_code_block = "<space>sb", -- send a code block.
					send_code_block_and_move = "<space>sn", -- send a code block and move.
					mark_motion = "<space>mc", -- mark motion.
					mark_visual = "<space>mc", -- mark visual selection.
					remove_mark = "<space>md", -- remove mark.
					cr = "<space>s<cr>", -- send carriage return.
					interrupt = "<space>s<space>", -- interrupt command.
					exit = "<space>sq", -- exit the REPL.
					clear = "<space>cl", -- clear the REPL.
				},
				highlight = {
					italic = true, -- Customize highlight for sent code (using Neovim’s highlight API).
				},
				ignore_blank_lines = true, -- Ignore blank lines when sending code.
			})

			-- Additional keymaps for focusing/hiding the REPL window:
			vim.keymap.set("n", "<space>rf", "<cmd>IronFocus<cr>")
			vim.keymap.set("n", "<space>rh", "<cmd>IronHide<cr>")
		end,
	},
}
