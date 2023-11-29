package com.maycon.java_api_condominio.dto;

import com.maycon.java_api_condominio.model.CondominiumModel;
import com.maycon.java_api_condominio.model.ResidentModel;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserLogin {
    private String cpf;
    private String pwd;
}
