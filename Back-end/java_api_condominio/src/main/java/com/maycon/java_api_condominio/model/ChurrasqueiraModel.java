package com.maycon.java_api_condominio.model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
@Document("vaga")
public class ChurrasqueiraModel {
    
    @Id
    private String id;
    private String number;
    private String resindentId;
    private String condominiumId;
    private String blockNumber;
    private String apartNumber;
    private LocalDateTime startDate;
    private LocalDateTime endDate;

    public ChurrasqueiraModel(
        String number, String resindentId, String condominiumId,
        String blockNumber, String apartNumber,
        LocalDateTime startDate, LocalDateTime endDate
    )
    {
        this.number = number;
        this.resindentId = resindentId;
        this.condominiumId = condominiumId;
        this.blockNumber = blockNumber;
        this.apartNumber = apartNumber;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    
    public ChurrasqueiraModel(
        String number, String resindentId, String condominiumId,
        String blockNumber, String apartNumber
    )
    {
        this.number = number;
        this.resindentId = resindentId;
        this.condominiumId = condominiumId;
        this.blockNumber = blockNumber;
        this.apartNumber = apartNumber;
    }

    public ChurrasqueiraModel(
        String id, String number, String condominiumId
    )
    {
        this.id = id;
        this.number = number;
        this.condominiumId = condominiumId;
    }

    public ChurrasqueiraModel(
        String number, String condominiumId
    )
    {
        this.number = number;
        this.condominiumId = condominiumId;
    }

    public ChurrasqueiraModel() {}
}
