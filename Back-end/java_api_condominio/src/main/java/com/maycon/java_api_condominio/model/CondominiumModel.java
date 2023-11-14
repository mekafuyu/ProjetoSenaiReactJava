package com.maycon.java_api_condominio.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
@Document("condominium")
public class CondominiumModel
{
    @Id
    private String id;
    private String name;
    private String cep;

    public CondominiumModel(String name, String cep)
    {
        this.name = name;
        this.cep = cep;
    }

    public CondominiumModel(String id)
    {
        this.id = id;
    }

    public CondominiumModel() {}
}
