DROP TABLE IF EXISTS customers_website_data;

-- Create customers_website_data table for Supabase
CREATE TABLE IF NOT EXISTS customers_website_data (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    customer_website_id VARCHAR(255) NOT NULL,
    data JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP WITH TIME ZONE DEFAULT NULL
);

-- Create indexes
CREATE UNIQUE INDEX IF NOT EXISTS idx_customers_website_data_customer_website_id
ON customers_website_data(customer_website_id);

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_customers_website_data_updated_at
    BEFORE UPDATE ON customers_website_data
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();