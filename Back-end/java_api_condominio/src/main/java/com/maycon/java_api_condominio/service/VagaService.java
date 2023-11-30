package com.maycon.java_api_condominio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maycon.java_api_condominio.model.VagaModel;
import com.maycon.java_api_condominio.repository.VagaRepository;

@Service
public class VagaService {
    
    @Autowired
    private VagaRepository vagaRepository;

    public VagaModel save(VagaModel vagaModel)
    {
        return this.vagaRepository.save(vagaModel);
    }

    public void save(String id, String number, String condominiumId)
    {
        VagaModel newVaga = new VagaModel(id, number, condominiumId);
        this.vagaRepository.save(newVaga);
        return;
    }

    public void update(String id, VagaModel vagaModel)
    {
        vagaModel.setId(id);
        this.vagaRepository.save(vagaModel);
        return;
    }

    public List<VagaModel> findAll()
    {
        return (List<VagaModel>) this.vagaRepository.findAll();
    }

    public List<VagaModel> findByNumberInCondo(String number, String condominiumId)
    {
        return (List<VagaModel>) this.vagaRepository.findByNumberInCondo(number, condominiumId);
    }

    public List<VagaModel> findByCondoId(String id)
    {
        return (List<VagaModel>) this.vagaRepository.findByCondoId(id);
    }

    public void delete(String id)
    {
        this.vagaRepository.deleteById(id);
        return;
    }
}
