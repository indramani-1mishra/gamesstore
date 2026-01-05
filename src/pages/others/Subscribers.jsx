import React from 'react'
import Head from '@/layout/head/Head'
import { Card, Badge } from "reactstrap";
import { recentOrderData } from '@/components/partials/default/recent-orders/OrderData';
import Content from '@/layout/content/Content'
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  DataTableHead,
  DataTableItem,
  DataTableRow,
  BlockBetween,
  UserAvatar
} from '@/components/Component'

const Subscribers = () => {
  return (
    <React.Fragment>
      <Head title='Subscribers'></Head>
      <Content>
        <BlockHead size='sm'>
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag='h3'>
                Subscribers
              </BlockTitle>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block>
         
          <Card className='card-full'>
            <div className='card-inner'>
              <div className='card-title-group'>
                <div className='card-title'>
                  <h6 className='title'>Total Subscribers</h6>
                </div>
              </div>
            </div>
            <div className='nk-tb-list mt-n2'>
              <DataTableHead>
                <DataTableRow>
                  <span>Order No.</span>
                </DataTableRow>
                <DataTableRow size='sm'>
                  <span>Customer</span>
                </DataTableRow>
                <DataTableRow size='md'>
                  <span>Date</span>
                </DataTableRow>
                <DataTableRow>
                  <span>Amount</span>
                </DataTableRow>
                <DataTableRow>
                  <span className='d-none d-sm-inline'>Status</span>
                </DataTableRow>
              </DataTableHead>
              {recentOrderData.map((item, idx) => (
                <DataTableItem key={idx}>
                  <DataTableRow>
                    <span className='tb-lead'>
                      <a href='#order' onClick={ev => ev.preventDefault()}>
                        {item.order}
                      </a>
                    </span>
                  </DataTableRow>
                  <DataTableRow size='sm'>
                    <div className='user-card'>
                      <UserAvatar
                        className='sm'
                        theme={item.theme}
                        text={item.initial}
                        image={item.img}
                      ></UserAvatar>
                      <div className='user-name'>
                        <span className='tb-lead'>{item.name}</span>
                      </div>
                    </div>
                  </DataTableRow>
                  <DataTableRow size='md'>
                    <span className='tb-sub'>{item.date}</span>
                  </DataTableRow>
                  <DataTableRow>
                    <span className='tb-sub tb-amount'>
                      {item.amount} <span>SZL</span>
                    </span>
                  </DataTableRow>
                  <DataTableRow>
                    <Badge
                      className='badge-dot badge-dot-xs'
                      color={
                        item.status === 'Paid'
                          ? 'success'
                          : item.status === 'Due'
                          ? 'warning'
                          : 'danger'
                      }
                    >
                      {item.status}
                    </Badge>
                  </DataTableRow>
                </DataTableItem>
              ))}
            </div>
          </Card>
        </Block>
      </Content>
    </React.Fragment>
  )
}

export default Subscribers
