package com.maycon.java_api_condominio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maycon.java_api_condominio.model.VagaModel;
import com.maycon.java_api_condominio.repository.VagaRepository;

@Service
public class VagaService {
    
    @Autowired
    private VagaRepository VagaRepository;

    public VagaModel save(VagaModel VagaModel)
    {
        return this.VagaRepository.save(VagaModel);
    }

    public void save(String id, String number, String condominiumId)
    {
        VagaModel newVaga = new VagaModel(id, number, condominiumId);
        this.VagaRepository.save(newVaga);
        return;
    }

    public List<VagaModel> findAll()
    {
        return (List<VagaModel>) this.VagaRepository.findAll();
    }

    public List<VagaModel> findByNumberInCondo(String number, String condominiumId)
    {
        return (List<VagaModel>) this.VagaRepository.findByNumberInCondo(number, condominiumId);
    }

    public List<VagaModel> findByCondoId(String id)
    {
        return (List<VagaModel>) this.VagaRepository.findByCondoId(id);
    }

    public void delete(String id)
    {
        this.VagaRepository.deleteById(id);
        return;
    }
}
