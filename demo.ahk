#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

; map PrintScreen to ctrl+F8
PrintScreen::
    Keywait, PrintScreen
    Send ^{F8}
Return

; map ctrl+j to movement of the mouse to 1024, 500 and getting back to initial position
^j::
CoordMode, Mouse, Screen
  MouseGetPos, xpos, ypos
  Click 1024, 500
  MouseMove, xpos, ypos
Return
