﻿using DataLayer.Repositories;
using System;

namespace BusinessLogic.Workflow.Interfaces
{
    internal interface IUnitOfWork : IDisposable
    {
        T Repository<T>() where T : BaseDataRepository;

        void CommitTransaction();

        void RollbackTransaction();

        void FinalizeTransaction(bool isTransactionSuccessful);
    }
}
