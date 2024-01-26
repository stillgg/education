.model tiny
.code
ORG 100h
	
begin:	
  MOV  AH,  9          
  MOV  DX,  OFFSET Msg
  INT  21h             

  RET           
        
Msg DB 'Hello, World!!!$'

END begin