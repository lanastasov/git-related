Dir.glob("*").each { |x|
	if File.directory?("#{x}") then
		Dir.chdir("#{x}")
		system("git pull")
		Dir.chdir("../")
	end
}