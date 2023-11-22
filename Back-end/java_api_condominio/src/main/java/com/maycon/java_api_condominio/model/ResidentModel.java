package com.maycon.java_api_condominio.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
@Document("resident")
public class ResidentModel
{
    @Id
    private String id;
    private String condominiumId;
    private String name;
    private String cpf;
    private String pwd;
    private boolean propManager;
    private String blockNumber;
    private String apartNumber;
    

    public ResidentModel(
        String condominiumId, String name,
        String cpf, String pwd,
        boolean propManager, String blockNumber,
        String apartNumber)
    {
        this.condominiumId = condominiumId;
        this.name = name;
        this.cpf = cpf;
        this.pwd = pwd;
        this.propManager = propManager;
        this.blockNumber = blockNumber;
        this.apartNumber = apartNumber;
    }

    public ResidentModel(
        String condominiumId, String name,
        String cpf, String pwd,
        String blockNumber, String apartNumber)
    {
        this.condominiumId = condominiumId;
        this.name = name;
        this.cpf = cpf;
        this.pwd = pwd;
        this.blockNumber = blockNumber;
        this.apartNumber = apartNumber;
    }
    

    public ResidentModel(
        String condominiumId, String name,
        String cpf)
    {
        this.condominiumId = condominiumId;
        this.name = name;
        this.cpf = cpf;
    }

    public ResidentModel(
        String name, String cpf)
    {
        this.name = name;
        this.cpf = cpf;
    }

    public ResidentModel(String id)
    {
        this.id = id;
    }

    public ResidentModel() {}
}
