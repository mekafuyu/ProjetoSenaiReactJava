package com.maycon.java_api_condominio.model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
@Document("vaga")
public class VagaModel {
    
    @Id
    private String id;
    private String number;
    private String resindentId;
    private String condominiumId;
    private String blockNumber;
    private String apartNumber;
    private boolean permanent;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    

    public VagaModel(
        String number, String resindentId, String condominiumId,
        String blockNumber, String apartNumber, boolean permanent,
        LocalDateTime startDate, LocalDateTime endDate
    )
    {
        this.number = number;
        this.resindentId = resindentId;
        this.condominiumId = condominiumId;
        this.blockNumber = blockNumber;
        this.apartNumber = apartNumber;
        this.permanent = permanent;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    
    public VagaModel(
        String number, String resindentId, String condominiumId,
        String blockNumber, String apartNumber, boolean permanent
    )
    {
        this.number = number;
        this.resindentId = resindentId;
        this.condominiumId = condominiumId;
        this.blockNumber = blockNumber;
        this.apartNumber = apartNumber;
        this.permanent = permanent;
    }

    public VagaModel(
        String id, String number, String condominiumId
    )
    {
        this.id = id;
        this.number = number;
        this.condominiumId = condominiumId;
    }

    public VagaModel(
        String number, String condominiumId
    )
    {
        this.number = number;
        this.condominiumId = condominiumId;
    }


    public VagaModel() {}
}
