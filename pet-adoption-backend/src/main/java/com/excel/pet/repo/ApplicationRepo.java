package com.excel.pet.repo;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excel.pet.entity.Application;

public interface ApplicationRepo extends JpaRepository<Application, Integer>{
	
	Optional<Application> findAllByApplicationStatus(Application applicationStatus);
	

}
