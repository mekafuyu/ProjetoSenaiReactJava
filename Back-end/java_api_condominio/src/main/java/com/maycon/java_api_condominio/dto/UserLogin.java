package com.maycon.java_api_condominio.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserLogin {
    private String cpf;
    private String pwd;
}
