package com.maycon.java_api_condominio.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
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
    @DBRef
    private String condominiumId;
    private String name;
    private String cpf;
    private boolean propManager;
    private int blockNumber;
    private int apartNumber;
    

    public ResidentModel(
        String condominiumId, String name, String cpf,
        boolean propManager, int blockNumber, int apartNumber)
    {
        this.condominiumId = condominiumId;
        this.name = name;
        this.cpf = cpf;
        this.propManager = propManager;
        this.blockNumber = blockNumber;
        this.apartNumber = apartNumber;
    }
    
    public ResidentModel(
        String condominiumId, String name, String cpf,
        boolean propManager, int blockNumber)
    {
        this.condominiumId = condominiumId;
        this.name = name;
        this.cpf = cpf;
        this.propManager = propManager;
        this.blockNumber = blockNumber;
    }

    public ResidentModel(
        String condominiumId, String name, String cpf,
        boolean propManager)
    {
        this.condominiumId = condominiumId;
        this.name = name;
        this.cpf = cpf;
        this.propManager = propManager;
    }

    public ResidentModel(
        String condominiumId, String name, String cpf)
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
