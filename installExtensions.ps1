$pathSet = $env:APPDATA+"\Code\User\settings.json"
# $pathSet = ".\settings.json"
$icon = @"
    "workbench.iconTheme": ".*
"@
$color = @"
    "workbench.colorTheme": ".*
"@
$save = @"
    "files.autoSave": ".*
"@
$editor = @"
    "[javascript]": {
		"*"
    }
"@

$change = '{
    "workbench.colorTheme": "Ayu Mirage Bordered",
    "workbench.iconTheme": "material-icon-theme",
    "files.autoSave": "afterDelay",
	"[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
    }'

code --install-extension pkief.material-icon-theme
code --install-extension teabyii.ayu
code --install-extension esbenp.prettier-vscode

$result = get-content $pathSet
$result = $result | Select-String -Pattern $icon -NotMatch | Select-String -Pattern $color -NotMatch | Select-String -Pattern $save -NotMatch | Select-String -Pattern $editor -NotMatch
$result = $result | %{$_ -replace '{', $change}
# echo $result
$result | Out-File -FilePath $pathSet -Encoding utf8

code ./projectWorkspace.code-workspace

code --install-extension vscjava.vscode-java-pack
code --install-extension vmware.vscode-boot-dev-pack

code --list-extensions
