package com.maycon.java_api_condominio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maycon.java_api_condominio.model.VisitanteModel;
import com.maycon.java_api_condominio.repository.VisitanteRepository;

@Service
public class VisitanteService {
    
    @Autowired
    private VisitanteRepository visitanteRepository;

    public VisitanteModel save(VisitanteModel visitanteModel)
    {
        return this.visitanteRepository.save(visitanteModel);
    }

    public void save(String id, String name, String cep)
    {
        VisitanteModel newVisitante = new VisitanteModel(id, name, cep);
        this.visitanteRepository.save(newVisitante);
        return;
    }

    public List<VisitanteModel> findAll()
    {
        return (List<VisitanteModel>) this.visitanteRepository.findAll();
    }

    public List<VisitanteModel> findByName(String name)
    {
        return (List<VisitanteModel>) this.visitanteRepository.findByName(name);
    }

    public List<VisitanteModel> findByCondoId(String id)
    {
        return (List<VisitanteModel>) this.visitanteRepository.findByCondoId(id);
    }

    public VisitanteModel findByCpf(String cpf)
    {
        List<VisitanteModel> All =  (List<VisitanteModel>) this.visitanteRepository.findByCpf(cpf);
        return All.stream()
            .findFirst()
            .orElse(new VisitanteModel());
    }

    public List<VisitanteModel> findByResident(String residentId)
    {
        return (List<VisitanteModel>) this.visitanteRepository.findByResidentId(residentId);
    }

    public void delete(String id)
    {
        this.visitanteRepository.deleteById(id);
        return;
    }
}
