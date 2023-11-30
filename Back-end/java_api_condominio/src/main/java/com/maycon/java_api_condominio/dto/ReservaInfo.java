package com.maycon.java_api_condominio.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ReservaInfo {
    private String number;
    private String residentId;
    private String condominiumId;
    private String startDate;
    private String endDate;
}
