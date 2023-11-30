package com.maycon.java_api_condominio.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
@Document("visitante")
public class VisitanteModel
{
    @Id
    private String id;
    private String name;
    private String cpf;
    private String residentId;
    private String condominiumId;
    private String blockNumber;
    private String apartNumber;
    

    public VisitanteModel(
        String name, String cpf,
        String condominiumId, String residentId,
        String blockNumber,
        String apartNumber)
    {
        this.name = name;
        this.cpf = cpf;
        this.condominiumId = condominiumId;
        this.residentId = condominiumId;
        this.blockNumber = blockNumber;
        this.apartNumber = apartNumber;
    }

    public VisitanteModel(
        String name, String cpf,
        String condominiumId,
        String residentId)
    {
        this.name = name;
        this.cpf = cpf;
        this.condominiumId = condominiumId;
        this.residentId = residentId;
    }

    public VisitanteModel(
        String name, String cpf,
        String residentId)
    {
        this.name = name;
        this.cpf = cpf;
        this.residentId = residentId;
    }

    public VisitanteModel() {}
}
